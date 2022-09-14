import { Toolbar } from "../components/toolbar";
import styles from "../styles/EOM.module.css"

export const EOM = ({ employee }) => {
    console.log(employee);
    return (
        <div className="page-container">
            <Toolbar/>
            <div className={styles.main}>
                <h1>Employee of The Month</h1>

                <div className={styles.employeeOfTheMonth}>
                    <h3>Sadiq Bilyamin</h3>
                    <h3>{employee.position}</h3>
                    <img src='https://pbs.twimg.com/profile_images/1568149779938435074/qHrF0oDn_400x400.jpg' alt="" />
                    <p>{employee.description}</p>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth'
    )

    const employee = await apiResponse.json();

    return {
        props: {
            employee
        }
    }
}

export default EOM;