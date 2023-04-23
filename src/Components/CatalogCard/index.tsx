import './styles.css';

import imgComputer from '../../assets/Images/computer.png';


export default function CatalogCard() {
    return (
        <div className="gkc-card">

            <div className="gkc-catalog-card-top gkc-line-bottom">
                <img src={imgComputer} alt="Computa" />
            </div>

            <div className="gkc-catalog-card-bottom">
                <h3> R$5000,00</h3>
                <h4>Computador Gamer XT</h4>
            </div>
        </div>
    );
}