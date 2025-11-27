import InputText from "./InputText.jsx";
import InputTel from "./InputNumb.jsx";
import InputMail from "./InputMail.jsx";
import Select from "./Select.jsx";
import Textarea from "./TextArea.jsx";
import InputFile from "./InputFile.jsx";
import Button from "./Button.jsx";
import { useState } from "react";


function Sav() {
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        telephone: "",
        mail: "",
        commande: "",
        typeDemande: "",
        univers: "",
        description: "",
        fichier: null
    });

    const updateForm = (nom, value) => {
        setFormData(prev => ({
            ...prev,
        [nom]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <form className="sav" onSubmit={handleSubmit}>
            <InputText nom="Nom" placeholder='Votre nom' onChangeValue={(value) => updateForm('nom', value)}   />
            <InputText nom="Prenom" placeholder='Votre prenom' onChangeValue={(value) => updateForm('prenom', value)} />
            <InputTel nom="Téléphone" placeholder='06 XX XX XX XX' onChangeValue={(value) => updateForm('telephone', value)}/>
            <InputMail nom='Mail' placeholder='Votre adresse mail' onChangeValue={(value) => updateForm('mail', value)}/>
            <InputTel nom='Commande' placeholder='Votre numéro de commande' onChangeValue={(value) => updateForm('commande', value)}/>
            <Select options={["--Type de demande--", "complément", "Marchandise manquante", "marchandise cassée"]} onChangeValue={(value) => updateForm('typeDemande', value)} />
            <Select options={["--Univers--", "Carrelage", "Sanitaire", "Parquet", "Pierre", "Autres"]} onChangeValue={(value) => updateForm('univers', value)} />
            <Textarea placeholder="Décrivez nous votre demande. Plus vous nous donnerez d'information, plus vite nous pourrons traiter votre demande." onChangeValue={(value) => updateForm('description', value)}/>
            <InputFile />
            <Button nom="Envoyer" />
        </form>
    )
}
export default Sav;