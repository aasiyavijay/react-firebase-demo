import { useState } from "react";
import ReactTooltip from 'react-tooltip';

import Card from "../../components/Card";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";

import { ReactComponent as Grid } from './../../images/grid.svg';
import { ReactComponent as Clipboard } from './../../images/clipboard.svg';
import { ReactComponent as Info } from './../../images/question-circle.svg';

const Dashboard = () => {
  const [notes, setNotes] = useState(`Instructions:
  \nThis is an input text field you need to create, make sure that the area for text is with correct padding. Limit text to 500 characters.
  \nThis text must be stored in a Firebase realtime database.`)

  const handleNotesChange = e => setNotes(e.target.value);


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
