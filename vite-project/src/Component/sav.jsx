import InputText from "./InputText.jsx";
import InputTel from "./InputNumb.jsx";
import InputMail from "./InputMail.jsx";
import Select from "./Select.jsx";
import Textarea from "./TextArea.jsx";
import InputFile from "./InputFile.jsx";
import Button from "./Button.jsx";


function Sav() {
    return (
        <form className="sav">
            <InputText nom="Nom" placeholder='Votre nom'  />
            <InputText nom="Prenom" placeholder='Votre prenom'  />
            <InputTel nom="Téléphone" placeholder='06 XX XX XX XX' />
            <InputMail nom='Mail' placeholder='Votre adresse mail' />
            <InputTel nom='Commande' placeholder='Votre numéro de commande' />
            <Select options={["--Type de demande--", "complément", "Marchandise manquante", "marchandise cassée"]} />
            <Select options={["--Univers--", "Carrelage", "Sanitaire", "Parquet", "Pierre", "Autres"]} />
            <Textarea placeholder="Décrivez nous votre demande. Plus vous nous donnerez d'information, plus vite nous pourrons traiter votre demande." />
            <InputFile />
            <Button nom="Envoyer" />
        </form>
    )
}
export default Sav;