import React from 'react';
import { Link } from 'react-router-dom';

import './styles/ProfileListStyle.css';

import ProfileCard from '../components/ProfileCardComponent';
import confLogo from '../images/logo-ag-min.png';


class ProfileList extends React.Component {

    //El constructor es el primer método que ocurre
    //este método recibe nuestros PROPS, los cuales debemos
    //utilizar para inicializar la super clase
    //Lugar idela para inicializar estado
    constructor(props){
        super(props);
        console.log('1. constructor()');
        //debemos decir this.
        this.state= {
            data: [],
        }
    }

    //El componente DidMount Excelente lugar para
    //cargar nuestra data que llega externa de un API
    //Es el tercer método que se ejecuta
    componentDidMount(){
        console.log('3. componentDidMount()');
        //simular peticion asincrona, decimos que en 3000 milisegundos
        //se actualice el estado con los datos que deseo mostrar
        //en pantalla

        //2. setTimeout retorna un timeoutID
        this.timeoutId = setTimeout(() => {
            this.setState({
                data:[
                    {
                        "id": "250fe715-88d4-4c18-95e7-62a6a097803a",
                        "firstName": "Zoie",
                        "lastName": "Grant",
                        "email": "Efrain_Gaylord6@yahoo.com",
                        "jobTitle": "Corporate Branding Representative",
                        "twitter": "ZoieGrant05512-2019",
                        "avatarUrl": "https://www.gravatar.com/avatar/0fc6d5ee2ee176d4581acf6a7e5644cc?d=identicon"
                    },
                    {
                        "id": "22330587-c700-4d00-911d-91de63db1f42",
                        "firstName": "Dustin",
                        "lastName": "Stehr",
                        "email": "Lue.Funk@hotmail.com",
                        "jobTitle": "Legacy Infrastructure Consultant",
                        "twitter": "DustinStehr77585-9157",
                        "avatarUrl": "https://www.gravatar.com/avatar/272e74beaee600c8ab957ddee8444495?d=identicon"
                    },
                    {
                        "id": "f1183526-aff1-46da-8bfb-976563c6f696",
                        "firstName": "Karlee",
                        "lastName": "Satterfield",
                        "email": "Christian31@gmail.com",
                        "jobTitle": "Chief Accounts Agent",
                        "twitter": "KarleeSatterfield32692-9732",
                        "avatarUrl": "https://www.gravatar.com/avatar/c2d679f9b44e1869548ab95aac18b7c9?d=identicon"
                    },
                    {
                        "id": "49026077-38f1-42e4-9f00-e230e04effa9",
                        "firstName": "Ernie",
                        "lastName": "Schmidt",
                        "email": "Shemar63@yahoo.com",
                        "jobTitle": "Dynamic Accounts Coordinator",
                        "twitter": "ErnieSchmidt56445-6854",
                        "avatarUrl": "https://www.gravatar.com/avatar/6a7e6f60ad63c102322894ab94a26f2f?d=identicon"
                    },
                    {
                        "id": "a6aeca9b-a7c1-45d2-b970-0121c682402a",
                        "firstName": "Kelly",
                        "lastName": "Corkery",
                        "email": "Van_Schimmel@yahoo.com",
                        "jobTitle": "Dynamic Tactics Liaison",
                        "twitter": "KellyCorkery06275-3676",
                        "avatarUrl": "https://www.gravatar.com/avatar/00e35de53a06a655fe5b6ac8b96bdb84?d=identicon"
                    },
                    {
                        "id": "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                        "firstName": "Freda",
                        "lastName": "Grady",
                        "email": "Leann_Berge@gmail.com",
                        "jobTitle": "Legacy Brand Director",
                        "twitter": "FredaGrady22221-7573",
                        "avatarUrl": "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
                    },
                    {
                        "id": "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                        "firstName": "Major",
                        "lastName": "Rodriguez",
                        "email": "Ilene66@hotmail.com",
                        "jobTitle": "Human Research Architect",
                        "twitter": "ajorRodriguez61545",
                        "avatarUrl": "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
                    },
                    {
                        "id": "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                        "firstName": "Daphney",
                        "lastName": "Torphy",
                        "email": "Ron61@hotmail.com",
                        "jobTitle": "National Markets Officer",
                        "twitter": "DaphneyTorphy96105",
                        "avatarUrl": "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
                    }
                ]
            })
        }, 3000);

    }

    //recibe dos argumentos los props que se tenian antes y el segundo
    //el state que tenía antes
    componentDidUpdate(prevProps, prevState){
        console.log('5. componenteDidUpdate()');
        //imprimiendo los valores que tenia antes
        //y los nuevos valores
        console.log({
            prevProps: prevProps,
            prevState: prevState
        });
        //comparando con los nuevos valores
        console.log({
            props: this.props,
            state: this.state
        })
    }

    //Ultimo componente, es el que ocurre ANTES de que se vaya
    //nuestro componente de pantalla (DEL DOM),
    //Detalle importante! debo garantizar si me muevo a otro lugar
    //parar la llamada ASINCRONA!, ya que el componente se fue es un ERROR COMUN
    
    componentWillUnmount(){
        console.log('6. componentWillUnMount()');
        //el timeoutID nos sirve para llamar otra funcion
        //llamada clearTimeout()
        //si el id existe y el trabajo esta pendiente lo CANCELA 
        clearTimeout(this.timeoutId);
    }
    //El segundo método que ocurre es el render!
    //También es 4 ya que ocurre una actualización al llamar
    //los datos de componentDidMount y junto a esa actualización
    //se llama a componentDidUpdate
    render() { 
        console.log('2/4. render()');
        return ( 
            <React.Fragment>
                <div className="ProfileList">
                    <div className="ProfileList__hero">
                        <div className="ProfileList__container">
                            <img src={confLogo} alt="Mi logo" />
                        </div>
                    </div>
                </div>
                <div className="ProfileList__container">
                    <div className="ProfileList__buttons">
                        <Link to="profile/new" className="btn btn-primary">
                            Agregar Perfil
                        </Link>
                    </div>
                    <div>
                        <div className="ProfileList__container">
                            <ProfileCard profiles={this.state.data} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProfileList;