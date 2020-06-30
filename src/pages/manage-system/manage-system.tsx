import React, { useState, ChangeEvent, useEffect } from "react";
import "./manage-system.styles.scss";
import Button from "../../shared/components/button/button";
import Input from "../../shared/components/input/input";
import api from '../../shared/services/api'


interface ILookup {
    id: number;
    name: string;
    description: string;
}

interface ISystem {
  id: number;
  name: string;
  description: string;
  classes: 
      {
        id: number;
        name: string;
        description: string;
      } [];
  races: 
    {
      id: number;
      name: string;
      description: string;
    }[]
}


const ManageSystem = () => {
  const [system, setSystem] = useState<ISystem>({} as ISystem);
  const [classes, setClasses] = useState<ILookup[]>([]);
  const [races, setRaces] = useState<ILookup[]>([]);

  useEffect(() => {
    api.get('classes')
      .then((response) => {
        const { classes } = response.data 
        setClasses(classes);
      });
  }, []);

  useEffect(() => {
    api.get('races')
      .then((response) => {
        const { races } = response.data 
        setRaces(races);
      });
  }, []);

  useEffect(() => {
    api.get('systems/1')
      .then((response) => {
        const { system } = response.data 
        setSystem(system);
      });
  }, []);


  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setSystem({
      ...system,
      [name]: value,
    });
  }

  function handleSelectedClass(event: ChangeEvent<HTMLSelectElement>) {
    const classId = Number(event.target.value);
    const alreadySelected = system.classes.some(c => c.id === classId);

    if(alreadySelected) {
        const filtereClasses = system.classes.filter(c => c.id !== classId);
        setSystem({...system, classes:filtereClasses});
    } else {
        const newClasse = classes.filter(c => c.id === classId)[0];
        const newClasses = system.classes.concat([newClasse]) 
        setSystem({...system, classes:newClasses })
    }
  }

  function handleSelectedRace(event: ChangeEvent<HTMLSelectElement>) {
    const raceId = Number(event.target.value);
    const alreadySelected = system.races.some(c => c.id === raceId);

    if(alreadySelected) {
        const filtereRaces = system.races.filter(c => c.id !== raceId);
        setSystem({...system, races:filtereRaces});
    } else {
        const newRace = races.filter(c => c.id === raceId)[0];
        const newRaces = system.races.concat([newRace]) 
        setSystem({...system, races:newRaces })
    }
  }


  return (
    <div>
      <form>
        <Input
          htmlFor="systemName"
          type="text"
          name="systemName"
          id="systemName"
          value={system.name}
          onChange={handleInputChange}
          label="Nome do sistema"
        />
        <Input
          htmlFor="systemDescription"
          type="textarea"
          name="systemDescription"
          id="systemDescription"
          value={system.description}
          onChange={handleInputChange}
          label="Descrição do sistema"
        />

        <div className="field">
          <label htmlFor="class">Classes</label>
          <select
            name="class"
            id="class"
            onChange={handleSelectedClass}
          >
            <option value="0">Selecione as classes</option>
            {classes && classes.map((clas) => (
                  <option key={clas.id} value={clas.id}>
                    {clas.name}
                  </option>
                ))}
          </select>
          {system.classes?.map(c => (
              <li key={c.id}>{c.name}</li>
          ))}
        </div>

        <div className="field">
          <label htmlFor="races">Raças</label>
          <select
            name="races"
            id="races"
            onChange={handleSelectedRace}
          >
            <option value="0">Selecione as raças</option>
            {races && races.map((race) => (
                  <option key={race.id} value={race.id}>
                    {race.name}
                  </option>
                ))}
          </select>
            <div className="list">
                {system.races?.map(c => (
                        <span key={c.id}>{c.name}: {c.description}</span>
                ))}
            </div>
        </div>

        <Button>Editar sistema</Button>
      </form>
    </div>
  );
};

export default ManageSystem;
