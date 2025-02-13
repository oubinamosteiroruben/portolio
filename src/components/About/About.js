"use client";

import React, {useEffect, useState, useRef} from "react";
import Image from "next/image";
import './About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCalendar, faComments, faHand, faPersonDigging, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

export default function About() {

  const [selectedWorkExperienceItem, setSelectedWorkExperienceItem] = useState(undefined);

  const expandedItemRef = useRef(null);

  useEffect(() => {
    if (selectedWorkExperienceItem) {
      expandedItemRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedWorkExperienceItem]);

  return (
    <div className="about">
      <div className="first-row">
        <div className="work-temporal-line card-about">
          <CardWorkExperience setSelectedWorkExperienceItem={setSelectedWorkExperienceItem}/>
        </div>
        <div className="personal-summary card-about">
          <div className="first-container">
            <Image src="/img_cara.JPG" alt="Logo" width={150} height={150} className="img-face" />
            <div className="delimitador"></div>
            <div className="text-container">
              <h1>Ingeniero Informático</h1>
              {/* <h1>Hola <FontAwesomeIcon icon={faHand} className="icon-hand" /></h1> */}
            </div>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean euismod, nisl eget auctor eleifend, quam est aliquet metus, sed tristique neque odio in erat. Suspendisse potenti. Donec fermentum, ligula ac convallis tincidunt, ligula elit rhoncus nisi, ut aliquet libero libero sit amet justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut convallis metus nec nibh laoreet, a suscipit sapien euismod.
              <br/><br/>
              Integer tristique, risus nec varius ultricies, nisi turpis fringilla orci, et luctus turpis erat ac felis. Curabitur id justo nec metus mattis scelerisque. Nulla facilisi. Vestibulum pharetra quam ut urna condimentum, eget feugiat magna pharetra. Fusce tincidunt neque sit amet ligula facilisis, ut posuere purus vestibulum. Sed malesuada nisl ac justo hendrerit tristique. Aenean sed ex at ligula cursus eleifend.
              <br/><br/>
              Nam vehicula tincidunt nisl, at varius mauris convallis eget. Sed dictum sapien at libero consectetur, ut vestibulum sapien ultricies. Ut nec nunc nec mi cursus volutpat. Duis suscipit, nisl non dictum laoreet, metus velit vulputate arcu, nec luctus ligula risus eu quam. Etiam ac sollicitudin libero. Quisque id nisl eget lectus tempus bibendum vel et libero. Donec vestibulum, magna eget accumsan volutpat, ligula justo sodales nunc, sed gravida nisi mi in odio.
            </p>
          </div>
        </div>
        <div className="third-column">
          <div className="formation-temporal-line card-about">
            <CardFormacion />
          </div>
          <div className="languages-line card-about">
            <CardLanguages />
          </div>
        </div>
      </div>

      {
        selectedWorkExperienceItem && (
          <div className="card-about" ref={expandedItemRef}>
            <ExpandedItemWork {...selectedWorkExperienceItem} />
          </div>
        )
      }
      
      
    </div>
    
  );
}


const getInfoWorkExperience = (index) => {

  switch(index){
    case 0:
      return {
        title: 'Consultant - Desarrollador Front',
        company: 'SDG Group Spain',
        img: '/sdg_group_spain_logo.jpg',
        date: 'Abril de 2023 - Actualidad',
        descriptionItems: [
          'Desarrollo de mashups combinando React y Vue con Qlik, optimizando la visualización y el análisis de datos.',
          'Gestión y desarrollo integral de varios proyectos, organizando los distintos evolutivos y colaborando estrechamente con el equipo de consultoría para ofrecer mejores resultados.',
          'Compaginación con tareas de mentoría, facilitando la integración y formación de nuevas incorporaciones al equipo.',
          'Gran capacidad de aprendizaje, adaptándome a nuevas tecnologías y metodologías de trabajo.',
          'Participación en reuniones internacionales, coordinando alineaciones estratégicas y comunicación con distintos equipos.',
          'Acercamiento y aprendizaje en desarrollos backend para complementar soluciones full-stack.',
        ],
        technologies: ['React', 'Vue', 'Qlik', 'Looker', 'Git', 'Java', 'Jira',  'Frameworks propios']
      };
    case 1:
      return {
        title: 'Analyst - Desarrollador Front',
        company: 'SDG Group Spain',
        img: '/sdg_group_spain_logo.jpg',
        date: 'Septiembre 2022 - Marzo 2023',
        descriptionItems: [
          'Participación en desarrollos de mashups combinando Vue con Qlik.',
          'Colaboración con el equipo de consultoría.',
          'Gran capacidad de aprendizaje, adaptándome a nuevas tecnologías y metodologías de trabajo.',
          'Facil integración en el equipo de desarrollo.'
        ],
        technologies: ['Vue', 'Qlik', 'Git', 'Jira', 'Frameworks propios']
      };
    case 2:
      return {
        title: 'Trabajo Fin de Grado',
        company: 'SDG Group Spain - Universidad de Santiago de Compostela',
        img: '/sdg_group_spain_logo.jpg',
        date: 'Febrero 2022 - Julio 2022',
        description: 'Desarrollé una herramienta para el procesamiento de datos en streaming, permitiendo a los usuarios importar datos desde una API, transformarlos y agregarlos sin necesidad de conocimientos avanzados. La solución, basada en un modelo de contratos, facilita la integración con servicios de Business Intelligence. Además, realicé un estudio comparativo de tecnologías y pruebas end-to-end para validar su funcionalidad.',
        technologies: ['Java', 'SQL', 'Kafka', 'Docker']
      };
    case 3:
      return {
        title: 'Desarrollador Full-Stack',
        company: 'Plexus Tech',
        img: '/plexus_tech_logo.jpg',
        date: 'Julio 2021 - Agosto 2022',
        descriptionItems: [
          'Participación en un proyecto de una aplicación web de gestión de citas.',
          'Apoyo en la creación de plantillas de autorellenado de documentos.',
        ],
        technologies: ['HTML', 'CSS', 'Javascript', 'Java Spring']
      };
  }

}


function CardWorkExperience({setSelectedWorkExperienceItem}) {

  const [selected, setSelected] = useState(undefined);

  useEffect(() => {
    if(selected !== undefined){
      setSelectedWorkExperienceItem(getInfoWorkExperience(selected));
    }    
  }, [selected]);

  return (
    <>
      <div className="container-titulo"><h1>Experiencia Laboral &nbsp; <FontAwesomeIcon icon={faPersonDigging} /></h1></div>
        <ul className="work-list">
          <li onClick={()=>{setSelected(0)}} className={selected === 0 ? "work-item selected" : "work-item"}><ItemWork img='/sdg_group_spain_logo.jpg' date={'Abr. 23 - Actualidad'} title={'Consultant - Desarrollador Front'} description={'Desarrollador web front especializado en creación de cuadros de mando, principalmente para entidades bancarias.'} /></li>
          <li onClick={()=>{setSelected(1)}} className={selected === 1 ? "work-item selected" : "work-item"}><ItemWork img='/sdg_group_spain_logo.jpg' date={'Sep. 22 - Mar. 23'} title={'Analyst - Desarrollador Front'} description={'Desarrollador web front especializado en creación de cuadros de mando, principalmente para entidades bancarias.'} /></li>
          <li onClick={()=>{setSelected(2)}} className={selected === 2 ? "work-item selected" : "work-item"}><ItemWork img='/sdg_group_spain_logo.jpg' date={'Feb. 22 - Jul. 22'} title={'Trabajo Fin de Grado'} description={'Creación de una herramienta para la transformación y visualización de datos en tiempo real.'} /></li>
          <li onClick={()=>{setSelected(3)}} className={selected === 3 ? "work-item selected" : "work-item"}><ItemWork img='/plexus_tech_logo.jpg' date={'Jul. 21 - Ago. 21'} title={'Desarrollador Full-Stack'} description={'Prácticas como desarrollador full stack.'} /></li>
        </ul>
      </>
  )
}


function ItemWork({date, title, description, img}) {
  return (
    <>
      <div className="first-line">
        <Image src={img} alt="Logo" width={50} height={50} className="img-work" />
        <div className="text-container">
          <div className="title">{title}</div>
          <div className="date"><FontAwesomeIcon icon={faCalendar} />{date}</div>
        </div>
      </div>
      <div className="description">{description}</div>
    </>
  );
}

function CardFormacion({}) {

  return (
    <>
      <div className="container-titulo"><h1>Formación &nbsp; <FontAwesomeIcon icon={faUserGraduate} /></h1></div>
      <ul className="formation-list">
        <li className="formation-item"><FormationItem date={'Sep. 18 - Jun. 22'} title={'Grado Ingeniería Informática'} place={'Universidad de Santiago de Compostela'} nota='8.2'/></li>
        <li className="formation-item"><FormationItem date={'Curso académico 2020 - 2021'} title={'Erasmus+'} place={'Universidad de Łódź'} /></li>
        <li className="formation-item"><FormationItem date={'Sep. 16 - Mayo. 18'} title={'Bachillerato científico - técnico'} place={'IES A Basella'} /></li>
      </ul>
      </>
  )
}

function CardLanguages({}) {

  return (
    <>
      <div className="container-titulo"><h1>Idiomas &nbsp; <FontAwesomeIcon icon={faComments} /></h1></div>
      <ul className="languages-list">
        <li className="language-item"><LanguageItem language={'Castellano'} level={'Nativo'}/></li>
        <li className="language-item"><LanguageItem language={'Gallego'} level={'Nativo'} /></li>
        <li className="language-item"><LanguageItem language={'Inglés'} level={'Profesional'} /></li>
      </ul>
      </>
  )
}


function FormationItem({date, title, place, nota}) {
  return (
    <>
      <div className="title">{title}</div>
      <div className="place">{place}</div>
      <div className="date"><FontAwesomeIcon icon={faCalendar} />{date}</div>
      {nota && (<div className="nota">Nota Media: &nbsp;{nota}</div>)}
    </>
  );
}

function LanguageItem({language, level}) {
  return (
    <>
      <div className="language">{language}</div>
      <div className="level">{level}</div>
    </>
  );
}

function ExpandedItemWork({title, company, date, description, technologies, img, descriptionItems}) {
  return (
      <div className="expanded-item-work">
        <div className="first-line">
          <Image src={img} alt="Logo" width={75} height={75} className="img-work" />
          <div className="title">{title}</div>
          <div className="company">{company}</div>
          <div className="date"><FontAwesomeIcon icon={faCalendar} />{date}</div>
        </div>
        <div className="second-line">
          <div className="description">
            <div className="title-subcategory">Tareas y habilidades llevadas a cabo:</div>
            {description && (<p>{description}</p>)}
            {
              Array.isArray(descriptionItems) && (
                <ul className="description-list">
                  {
                    descriptionItems.map((item, index) => (
                      <li className="description-item" key={index}><FontAwesomeIcon className='icon' icon={faArrowRight} /> {item}</li>
                    ))
                  }
                </ul>
              )
            }
          </div>
          <div className="delimitador"></div>
          <div className="technologies">
            <div className="title-subcategory">Tecnologías empleadas:</div>
            <ul className="technologies-list">
              {
                technologies.map((tech, index) => (
                  <li className="technologies-item" key={index}>{tech}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
  );
}