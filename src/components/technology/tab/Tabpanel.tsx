import React from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import { motion } from 'framer-motion';

import redux from '../../../asstes/images/redux.png';
import html from '../../../asstes/images/html.png';
import css from '../../../asstes/images/css.png';
import wordpress from '../../../asstes/images/wordpress.png';
import jquery from '../../../asstes/images/jquery.png';
import js from '../../../asstes/images/js.png';
import ts from '../../../asstes/images/ts.png';
import bootstrap from '../../../asstes/images/bootstrap.png';
import react from "../../../asstes/images/react.png";

import git from "../../../asstes/images/git.png";
import netlify from "../../../asstes/images/netlify.png";
import gitbash from "../../../asstes/images/git-bash.png";
import npm from "../../../asstes/images/npm.png";
import yarn from "../../../asstes/images/yarn.png";
import github from "../../../asstes/images/github.png";
import gitlab from "../../../asstes/images/gitlab.png";

import vscode from "../../../asstes/images/vscode.png";
import figma from "../../../asstes/images/figma.png";
import postman from "../../../asstes/images/postman.png";
import atom from "../../../asstes/images/atom.png";

type Props = {}

const boxVariant = {
  visible: {opacity: 1, scale: 1, transition: {duration: 0.5}},
  hidden: {opacity:0, scale: 0}
}

const Tabpanel = (props: Props) => {

  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<any>();

  const [activeTab, setActiveTab] = React.useState('1');

  const toggleTab = (tab: any) => {
    if (activeTab !== tab) setActiveTab(tab)
  }


  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      <Nav className='mb-3 justify-content-center technology-details-tabhead'>
        <NavItem>
          <NavLink
            className={classnames({
              active:
                activeTab === '1'
            })}
            onClick={() => { toggleTab('1'); }}
          >
            Frontend
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active:
                activeTab === '2'
            })}
            onClick={() => {
              toggleTab("2")
            }}
          >
            Development
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active:
                activeTab === '3'
            })}
            onClick={() => {
              toggleTab("3")
            }}
          >
            Languages
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active:
                activeTab === '4'
            })}
            onClick={() => {
              toggleTab("4")
            }}
          >
            Tools
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab} className={`technology-details-tabcontent fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
        <TabPane tabId="1">
          <Nav className='react-ul'>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}>
              <NavItem className='react-li'>
                <img src={react} alt="React" height="60" width="60" style={{ color: "rgb(25, 115, 183)" }} />
                <span className="pt-1">React</span>
              </NavItem>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}>
              <NavItem className='react-li'>
                <img src={redux} alt="Redux" height="60" width="60" style={{ color: "rgb(25, 115, 183)" }} />
                <span className="pt-1">Redux</span>
              </NavItem>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}>
              <NavItem className='react-li'>
                <img src={jquery} alt="JQuery" height="60" width="60" style={{ color: "rgb(25, 115, 183)" }} />
                <span className="pt-1">JQuery</span>
              </NavItem>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}>
              <NavItem className='react-li'>
                <img src={wordpress} alt="" height="60" width="60" style={{ color: "rgb(25, 115, 183)" }} />
                <span className="pt-1">WordPress</span>
              </NavItem>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}>
              <NavItem className='react-li'>
                <img src={bootstrap} alt="Bootstrap" height="60" width="60" style={{ color: "rgb(25, 115, 183)" }} />
                <span className="pt-1">Bootstrap</span>
              </NavItem>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}>
              <NavItem className='react-li'>
                <img src={html} alt="HTML" height="60" width="60" />
                <span className="pt-1">Html</span>
              </NavItem>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}>
              <NavItem className='react-li'>
                <img src={css} alt="CSS" height="60" width="60" style={{ color: "rgb(25, 115, 183)" }} />
                <span className="pt-1">CSS</span>
              </NavItem>
            </motion.div>
          </Nav>
        </TabPane>
        <TabPane tabId="2">
          <Nav className='react-ul'>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}>
              <NavItem className='react-li'>
                <img src={git} alt="Git" height="60" width="60" style={{ color: "rgb(25, 115, 183)" }} />
                <span className="pt-1">Git</span>
              </NavItem>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}>
              <NavItem className='react-li'>
                <img src={gitbash} alt="GitBash" height="60" width="60" style={{ color: "rgb(25, 115, 183)" }} />
                <span className="pt-1">Git Bash</span>
              </NavItem>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}>
              <NavItem className='react-li'>
                <img src={gitlab} alt="Gitlab" height="60" width="60" style={{ color: "rgb(25, 115, 183)" }} />
                <span className="pt-1">Gitlab</span>
              </NavItem>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}>
              <NavItem className='react-li'>
                <img src={github} alt="Github" height="60" width="60" style={{ color: "rgb(25, 115, 183)" }} />
                <span className="pt-1">Github</span>
              </NavItem>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}>
              <NavItem className='react-li'>
                <img src={netlify} alt="Netlify" height="60" width="60" style={{ color: "rgb(25, 115, 183)" }} />
                <span className="pt-1">Netlify</span>
              </NavItem>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}>
              <NavItem className='react-li'>
                <img src={npm} alt="npm" height="60" width="60" />
                <span className="pt-1">npm</span>
              </NavItem>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}>
              <NavItem className='react-li'>
                <img src={yarn} alt="yarn" height="60" width="60" style={{ color: "rgb(25, 115, 183)" }} />
                <span className="pt-1">yarn</span>
              </NavItem>
            </motion.div>
          </Nav>
        </TabPane>
        <TabPane tabId="3">
          <Nav className='react-ul'>
            <motion.div
            variants={boxVariant}
            initial="hidden"
            animate="visible"
              whileHover={{
                scale: 1.1,
              }}>
              <NavItem className='react-li'>
                <img src={js} alt="JS" height="60" width="60" style={{ color: "rgb(25, 115, 183)" }} />
                <span className="pt-1">JavaScript</span>
              </NavItem>
            </motion.div>
            <motion.div
            variants={boxVariant}
            initial="hidden"
            animate="visible"
              whileHover={{
                scale: 1.1,
              }}>
              <NavItem className='react-li'>
                <img src={ts} alt="" height="60" width="60" style={{ color: "rgb(25, 115, 183)" }} />
                <span className="pt-1">TypeScript</span>
              </NavItem>
            </motion.div>
          </Nav>
        </TabPane>
        <TabPane tabId="4">
          <Nav className='react-ul'>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}>
              <NavItem className='react-li'>
                <img src={vscode} alt="React" height="60" width="60" style={{ color: "rgb(25, 115, 183)" }} />
                <span className="pt-1">Vscode</span>
              </NavItem>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}>
              <NavItem className='react-li'>
                <img src={postman} alt="Redux" height="60" width="60" style={{ color: "rgb(25, 115, 183)" }} />
                <span className="pt-1">Postman</span>
              </NavItem>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}>
              <NavItem className='react-li'>
                <img src={atom} alt="JQuery" height="60" width="60" style={{ color: "rgb(25, 115, 183)" }} />
                <span className="pt-1">Atom</span>
              </NavItem>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
              }}>
              <NavItem className='react-li'>
                <img src={figma} alt="" height="60" width="60" style={{ color: "rgb(25, 115, 183)" }} />
                <span className="pt-1">Figma</span>
              </NavItem>
            </motion.div>
          </Nav>
        </TabPane>
      </TabContent>
    </div>
  )
}
export default Tabpanel;