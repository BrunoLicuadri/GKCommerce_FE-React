import './styles.css';
import { useEffect, useState } from 'react';
import { UserDTO } from '../../../models/user';
import * as userService from '../../../services/user-service';

export default function AdminHome() {

    const [user, setUser] = useState<UserDTO>();

    useEffect( ()=>{
        userService.findMe()
        .then( response=>{
            setUser(response.data);
            console.log(response);
        })
        .catch( error=>{
            console.log("Error capturing name", error);
        })
    }, []);

    return (
        <main>
            <section id="admin-home-section" className="gkc-container">
                <h2 className="gkc-section-title gkc-mb20">Bem-vindo à área administrativa {user?.name}</h2>
            </section>
        </main>

    );
}