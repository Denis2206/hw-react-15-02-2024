import {useParams, Link} from "react-router-dom";
import Scan from "./Scan";

const Scans = () => {
    const params = useParams();
    const scansId = params.id;
    const scans = [
        {
            id: 1,
            scan: ["/images/scans/lotr1.jpg", "/images/scans/lotr2.jpg", "/images/scans/lotr3.jpg", "/images/scans/lotr4.jpg", "/images/scans/lotr5.jpg"],
        },
        {
            id: 2,
            scan: ["/images/scans/harry1.jpg", "/images/scans/harry2.jpg", "/images/scans/harry3.jpg", "/images/scans/harry4.jpg", "/images/scans/harry5.jpg"],
        },
    ];
    let pict = scans.find((s) => s.id === parseInt(scansId));
    return (
        <div>
            <div id="scans">
                {pict.scan.map((item, index) => (
                    <Scan key={index} scan={item} />
                ))}
                {/* <Scan text={"!!!!!!!!!"} scan={pict.scan[0]} /> */}
                {/* <Scan scan={scans.find((s) => s.id === parseInt(2)).scan} />; */}
                {/* <Scan scan={scans.find((s) => s.id === 2).scan} /> */}
                {/* <p>Сканы не прогружаются, но маршруты правильные, если добавить их на главную страницу, тогда грузятся.</p> */}
            </div>
            <br />
            <br />
            <Link to="/">Назад</Link>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default Scans;
