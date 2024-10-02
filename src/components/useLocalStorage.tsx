export const useLocalStorage = (key: string) => {
  const setNote = (value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const getNote = () => {
    try {
      const note = window.localStorage.getItem(key);
      return note ? JSON.parse(note) : [];
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = () => {
    try {
      console.log("deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return { setNote, getNote, deleteNote };
};
