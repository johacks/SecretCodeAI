import axios from 'axios';

/**
 * Provides functionalities to load a list of words from different resources. 
 */
class DictionaryService {
  static loadFromURL(url) {
    const promise = axios({
      url: url,
      method: 'GET',
      responseType: 'text',
    });
    const wordsPromise = promise.then((response) => {
      let words = response.data.split(/\r?\n/);
      return words;
    }).catch((error) => {
      return [];
    });
    return wordsPromise;
  }
}

export default DictionaryService;