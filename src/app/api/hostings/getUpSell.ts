import axios from "axios";

export async function getUpSell(optionID: string) {
  try {
    const urlCheck = `${process.env.NEXT_PUBLIC_API_UP_SELL}?optionID=${optionID}`;
    const response = await axios.get(urlCheck, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}