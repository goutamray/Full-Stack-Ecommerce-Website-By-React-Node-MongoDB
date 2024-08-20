
import axios from "axios"

/**
 *  fetch category data from api
 * @param {*} url 
 * @returns 
 */
export const fetchDataFromApi = async(url) => {
   try {
      const res = await axios.get("http://localhost:5050/api/v1/category"+url);
      return res.data;
   } catch (error) {
      console.error('Error submitting form data:', error.message);
      throw error; 
   }  
}; 


/**
 * send category data to database from api 
 * @param {*} url 
 * @param {*} formData 
 * @returns 
 */
export const postData = async(url, formData) => {
   try {
      const { res } = await axios.post("http://localhost:5050/api/v1/category"+ url, formData); 
      return res;
   } catch (error) {
      console.error('Error submitting form data:', error.message);
      throw error; // Re-throw the error for handling in the calling func
   }
}; 


/**
 * edit category data from api 
 * @param {*} url 
 * @param {*} updatedData 
 * @returns 
 */
export const editData = async( url, updatedData ) => {
  try {
   const { res } = await axios.patch(`http://localhost:5050/api/v1/category${url}`, updatedData); 
   return res;  
  } catch (error) {
   console.error('Error submitting form data:', error.message);
   throw error; // Re-throw the error for handling in the calling func
  }
}; 


/**
 * delete category data from api 
 * @param {*} id 
 * @returns 
 */
export const deleteData = async( id ) => {
   try {
      const { res } = await axios.delete(`http://localhost:5050/api/v1/category${id}`); 
      return res; 
   } catch (error) {
      console.error('Error submitting form data:', error.message);
      throw error; 
   }
}; 


/**
 * send product data to api 
 * @param {*} url 
 * @param {*} formData 
 * @returns 
 */
export const productData = async (url, formData) => {
   try {
       const res = await axios.post(`http://localhost:5050/api/v1/product${url}`, formData);
       return res.data; // Return the data property from the response
   } catch (error) {
       console.error('Error submitting form data:', error.message);
       throw error; // Re-throw the error for handling in the calling function
   }
};


/**
 *  fetch product data from api
 * @param {*} url 
 * @returns 
 */
export const fetchProductFromApi = async(url) => {
   try {
      const res = await axios.get("http://localhost:5050/api/v1/product"+url);
      return res.data;
   } catch (error) {
      console.error('Error submitting form data:', error.message);
      throw error; 
   }
    
};



/**
 * delete product data from api 
 * @param {*} id 
 * @returns 
 */
export const deleteProductData = async( id ) => {
   try {
      const res = await axios.delete(`http://localhost:5050/api/v1/product${id}`); 
      return res.data; 
   } catch (error) {
      console.error('Error submitting form data:', error.message);
      throw error; 
   }
}; 

/**
 * edit product data from api 
 * @param {*} url 
 * @param {*} updatedData 
 * @returns 
 */
export const editProductData = async( url, updatedData ) => {
   try {
    const res = await axios.patch(`http://localhost:5050/api/v1/product${url}`, updatedData); 
    return res.data;  
   } catch (error) {
    console.error('Error submitting form data:', error.message);
    throw error; // Re-throw the error for handling in the calling func
   }
 }; 
 

/**
 * send brand data to database from api 
 * @param {*} url 
 * @param {*} formData 
 * @returns 
 */
export const createBrandData = async(url, formData) => {
   try {
      const { res } = await axios.post("http://localhost:5050/api/v1/brand"+ url, formData); 
      return res;
   } catch (error) {
      console.error('Error submitting form data:', error.message);
      throw error; 
   }
}; 


/**
 *  fetch data from api
 * @param {*} url 
 * @returns 
 */
export const fetchBrandDataFromApi = async(url) => {
   try {
      const res = await axios.get("http://localhost:5050/api/v1/brand"+url);
      return res.data;
   } catch (error) {
      console.error('Error submitting form data:', error.message);
      throw error; 
   }  
}; 

/**
 * delete brand data from api 
 * @param {*} id 
 * @returns 
 */
export const deleteBrandData = async( id ) => {
   try {
      const res = await axios.delete(`http://localhost:5050/api/v1/brand${id}`); 
      return res.data; 
   } catch (error) {
      console.error('Error submitting form data:', error.message);
      throw error; 
   }
}; 


/**
 * edit brand data from api 
 * @param {*} url 
 * @param {*} updatedData 
 * @returns 
 */
export const editBrandData = async( url, updatedData ) => {
   try {
    const res = await axios.patch(`http://localhost:5050/api/v1/brand${url}`, updatedData); 
    return res.data;  
   } catch (error) {
    console.error('Error submitting form data:', error.message);
    throw error; 
   }
 }; 


