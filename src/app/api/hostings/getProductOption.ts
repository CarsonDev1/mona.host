import axios from 'axios';

export async function getProductOption({ signal }: { signal: AbortSignal }) {
  try {
    const baseUrl = 'http://192.168.2.115:5000/product-type?name=Mona%20Business';

    const response = await axios.get(baseUrl, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      signal
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
