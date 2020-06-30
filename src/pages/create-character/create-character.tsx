import React, { ChangeEvent, useState } from 'react'
import './create-character.styles.scss'
import Input from '../../shared/components/input/input'
import Button from '../../shared/components/button/button'

interface ICharacter {
    name: string;
    class: {
        id: number;
    };
    race: {
        id: number;
    };
    player: string;
    nivel: number;
    tendency: {
        id: number;
    };
    age: number;
    size: {
        id: number;
    };
    displacement: number;

}

const CreateCharacter = () => {
    const [formData, setFormData] = useState<ICharacter>({} as ICharacter);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

    
        setFormData({
          ...formData,
          [name]: value,
        });
      }

    return (
        <div>
            <form >
                <Input
                htmlFor="characterName"
                type="text"
                name="characterName"
                id="characterName"
                onChange={handleInputChange}
                label="Nome do personagem"
                />
                <Input
                htmlFor="characterName"
                type="text"
                name="characterName"
                id="characterName"
                onChange={handleInputChange}
                label="Nome do personagem"
                />
        <Button>Criar personagem</Button>
      </form>
        </div>
    )
}

export default CreateCharacter