export const getById = async (baseURL, id) => {
   const API_URL = process.env.API_URL;

   try {
      const res = await fetch(`${API_URL}${baseURL}/${id}`, {
         cache: 'no-store',
      });

      if (!res.ok) {
         throw new Error('Failed to fetch topic');
      }

      return res.json();
   } catch (error) {
      console.error(error);
   }
};

export const FetchDataForEditPage = async (apiUrl, id) => {
   if (id === 'new') {
      return { _id: 'new' };
   }

   const data = await getById(apiUrl, id);
   return data?.document || {};
};