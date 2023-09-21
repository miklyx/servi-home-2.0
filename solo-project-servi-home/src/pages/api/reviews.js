import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';

export async function POST(req) {
    try {
        const body = await req.json()
        const {email, username, password } = body

        const existingUserByEmail = await db.user.findUnique({
            where: { email: email }

        });
        if(existingUserByEmail) {
            return NextResponse.json( {user: null, message: "User with this email already exists"}, {status: 409})
        }

        const existingUserByUsername = await db.user.findUnique({
            where: { username: username }

        });
        if(existingUserByUsername) {
            return NextResponse.json( {user: null, message: "User with this username already exists"}, {status: 409})
        }
        
        const hashedPassword = await hash(password, 10);

        const newUser =  await db.user.create({ 
            data: {
            username,
            email,
            password: hashedPassword
        }})

        return NextResponse.json({user : newUser});

    } catch (error) {

    }
}