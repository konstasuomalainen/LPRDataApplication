// import Spline from "@splinetool/react-spline";
import NavHeader from "../components/NavHeader";
import NotesList from "../components/NotesList";
import NoteInput from "../components/NoteInput";

const FrontPage = () => {
  const addNote = (text: any) => {
    const sendNotesToList = [text];

    return sendNotesToList;
  };
  return (
    <div className="container">
      <section className="notes-container">
        <NavHeader />
        <div className="notes-container-contents">
          <NotesList handleAddNote={addNote}></NotesList>
          <NoteInput handleAddNote={addNote} />
        </div>
      </section>
    </div>
  );
};

export default FrontPage;
