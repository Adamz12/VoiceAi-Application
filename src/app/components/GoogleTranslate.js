// GoogleTranslate.js
import axios from 'axios';

const API_KEY = 'AIzaSyBrsPhbF5x-bcUB6LAsQ80cbQY9lSpVrPs';
const API_URL = 'https://translation.googleapis.com/language/translate/v2';

const translateText = async (text, targetLanguage) => {
  const response = await axios.post(
    `${API_URL}?key=${API_KEY}`,
    {
      q: text,
      target: targetLanguage,
    }
  );

  return response.data.data.translations[0].translatedText;
};

export default translateText;