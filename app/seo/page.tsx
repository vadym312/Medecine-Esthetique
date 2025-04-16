"use client";

import React, { useState } from "react";

const SEO = () => {
    const [url, setUrl] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    };

    const onFinish = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch("/api/sitemapIndex", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                url: url,
            }),
        });

        if (response.status === 200) {
            console.log("Url submitted successfully");
            alert("URL successfully submitted to Google!");
        } else {
            console.log(response.statusText);
            alert("Error: " + response.statusText);
        }
    };

    return (
        <div className="container mx-auto p-4 pt-28 h-[calc(100vh-192px)]">
            <h1 className="text-2xl font-bold mb-4">Google Indexing API</h1>
            <p className="mb-4">Submit URL to Google for indexing</p>

            <form onSubmit={onFinish} className="mb-4">
                <div className="mb-4">
                    <input
                        onChange={handleChange}
                        name="url"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="URL Format: https://website.com"
                        required
                    />
                </div>
                <button
                    className="px-4 py-2 bg-gold text-white rounded-lg hover:bg-gold/80"
                    type="submit"
                >
                    Submit to Google
                </button>
            </form>
        </div>
    );
};

export default SEO;
