import { useEffect, useState } from "react";
import { apiRequest } from "../utils/apiRequest";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  // get categories
  const getCategories = async () => {
    try {
      const { data } = await apiRequest.get("/api/category/get-category");
      console.log("API Response Data:", data); // Log to verify the structure
      // Set categories using the correct key 'category'
      setCategories(data?.category || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}
