import InputText from "../Component/InputText.jsx";
import Select from "../Component/Select.jsx";
import Textarea from "../Component/TextArea.jsx";


function Avis() {
    return (
        <>
            <InputText nom='Prenom' placeholder="Votre prénom" />
            <InputText nom='Nom' placeholder="Votre nom" />
            <Select options={['--Votre Agence--', 'Alençon', 'Caen', 'Verveuil sur avres', 'Hambye', 'Avranches', 'Carentan', 'Tourlaville', 'Granville', 'Saint-Malo' ]} />
            <Textarea placeholder='donnez votre avis' />
        </>
    )
}

export default Avis;