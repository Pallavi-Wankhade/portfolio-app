import styles from "./AppFooter.module.css";

const AppFooter = () => {
  return (
    <>
      <footer className={styles.footer1} id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>pallavi</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">Designed with React.js</div>
        </div>
      </footer>
    </>
  );
};

export default AppFooter;
