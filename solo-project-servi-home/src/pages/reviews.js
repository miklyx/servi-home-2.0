import React, { useState, useEffect } from "react";

function ReviewForm() {
  const [reviews, setReviews] = useState([]);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch("/api/reviews");
        const data = await response.json();
  
        
        if (Array.isArray(data)) {
          setReviews(data);
        } else {
          console.error("Received non-array data:", data);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, name, content }),
      });
  
      if (response.status === 201) {
        const data = await response.json();
        setReviews([...reviews, data.review]);
        setTitle('');
        setName('');
        setContent('');
      } else {
        console.error('Failed to create review');
      }
    } catch (error) {
      console.error('Error creating review:', error);
    }
  };
  
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Submit Your Review</h2>
        <div className="mb-4">
          <label className="text-gray-600">*Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-600">*Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-600">*Review Content:</label>
          <textarea
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400 h-32"
            required 
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit Review
        </button>
      </form>
      <div className="flex flex-col gap-4 mt-8 w-full max-w-2xl">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md m-4 border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
            <p className="text-gray-700 font-medium">{review.name}</p>
            <p className="text-gray-700 mt-2">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewForm;