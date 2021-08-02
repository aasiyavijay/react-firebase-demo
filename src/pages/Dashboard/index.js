import { useEffect, useState } from "react";
import ReactTooltip from 'react-tooltip';
import database from './../../firebase';

import Card from "../../components/Card";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";

import { ReactComponent as Grid } from './../../images/grid.svg';
import { ReactComponent as Clipboard } from './../../images/clipboard.svg';
import { ReactComponent as Info } from './../../images/question-circle.svg';

const Dashboard = () => {
  const [notes, setNotes] = useState();

  useEffect(() => {
    const notesRef = database.ref('notes/note');
    notesRef.on('value', (snapshot) => {
      const note = snapshot.val();
      setNotes(note);
    })
  }, [])

  const handleNotesChange = e => {
    const note = e.target.value;
    console.log(note);
    setNotes(note);
    database.ref("notes").set({
      note: note
    });
  }

  return (
    <div className="dashboard">
      <header className="main-header">
        <h1>Dashboard</h1>
      </header>
      <main className="main-content">
        <div className="dashboard-cards-container">
          <Card
            icon={<Grid />}
            title={<span>
              <span className="card-title-text">Agenda</span>
              <span className="card-title-help" data-tip="Help me understand"><Info /></span>
            </span>}
            content={
              <>
                <div className="checkboxes">
                  <Checkbox id="task1" label="Task 1" />
                  <Checkbox id="task2" label="Task 2" />
                  <Checkbox id="task3" label="Task 3" />
                </div>
                <div className="justify-center">
                  <Button text="Add Checkbox" />
                </div>
              </>
            }
            isCollapsable={true}
          />
          <Card
            icon={<Clipboard />}
            title={<span>Personal Notes</span>}
            content={
              <>
                <div className="content-box">
                  <textarea className="textarea" value={notes} maxLength={500} onChange={handleNotesChange} />
                </div>
                <div className="text-danger text-center mt-8">Max 500 characters</div>
                <div className="justify-center mt-16">
                  <Button text="Check Hover State" />
                </div>
              </>
            }
          />

          <Card
            icon={<Clipboard />}
            title={<span>Your Location</span>}
            content={
              <div className="content-box">
                <p>Country: Sweden</p>
                <p>Continent: Europe</p>
              </div>
            }
          />
        </div>
        <ReactTooltip />
      </main>
    </div>
  )
}

export default Dashboard;
