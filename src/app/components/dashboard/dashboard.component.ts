import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  addressForm = this.fb.group({
    question: [null, Validators.required],
    stream: [null, Validators.required],
    subject: [null, Validators.required],
    semester: [null, Validators.required],
    module: [null, Validators.required],
    questionType: [null, Validators.required],
    difficultyLevel: [null, Validators.required],
    taxonomyLevel: [null, Validators.required],
    maxmark: [null, Validators.required],
    
  });

  hasUnitNumber = false;

  stream2 = [
    // Stream: Computers
    {
      name: 'Computers',
      abbreviation: 'CMPN',
      sem1:{
        subjects: ['Applied Maths', 'Applied Physics','Applied Chemistry', 'EVS','BEE','Enigineering Mechanics']
      },
      sem2:{
        subjects: ['Applied Mathematics-2', 'Applied Physics-2', 'Applied Chemistry-2', 'Engineering Drawing', 'Structured Programming Approach', 'Communication Skills', 'Basic Workshop Practice-2']
      },
      sem3:{
        subjects: ['Applied Mathematics-3', 'Digital Logic Design and Analysis', 'Discrete Mathematics', 'Electronic Circuits and Communication Fundamentals', 'Data Structures', 'Digital System Lab', 'Basic Electronics Lab', 'Data Structure Lab', 'OOPM(JAVA)Lab']
      },
      sem4:{
        subjects: ['Applied Mathematics-4', 'Analysis of Algorithms', 'Computer Organization and Architecture', 'Computer Graphics', 'Operating System', 'Analysis of Algorithms Lab', 'Computer Graphics Lab', 'Processor Architecture Lab', 'Operating System Lab', 'Open Source Tech Lab']
      },
      sem5:{
        subjects: ['Microprocessor', 'Database Management System', 'Computer Network', 'Theory of Computer Science', 'Microprocessor Lab', 'Computer Network Lab', 'Database & Info. System Lab', 'Web Design Lab', 'Business Comm. & Ethics']
      },
      sem6:{
        subjects: ['Software Engineering', 'System Programming & Complier Construction', 'Data Warehousing & Mining', 'Cryptography & System Security', 'Software Engineering Lab', 'System software Lab', 'Data warehousing & Mining Lab', 'System Security Lab', 'Mini-Project']
      },
      sem7:{
        subjects: ['Digital Signal & Image Processing', 'Mobile Communication & Computing', 'Artificial Intelligence & Soft Computing', 'Digital Signal & Image Processing Lab', 'Mobile App. Development. Tech. Lab', 'Artificial Intelligence & Soft Computing Lab', 'Computational Lab-1', 'Major Project-1']
      },
      sem8:{
        subjects: ['Human Machine Interaction', 'Distributed Computing', 'Human Machine Interaction Lab', 'Distributed Computing Lab', 'Cloud Computing Lab', 'Computational Lab-2', 'Major Project-2']
      }
    },
    // Stream: Stream2
    {
      name: 'Eectronics and Telecommunication',
      abbreviation: 'EXTC',
      sem1:{
        subjects: ['Applied Mathematics-1', 'Applied Physics-1', 'Applied Chemistry-1', 'Engineering Mechanics', 'Basic Electrical Engineering', 'Environmental studies', 'Basic Workshop Practice-1']
      },
      sem2:{
        subjects: ['Applied Mathematics-2', 'Applied Physics-2', 'Applied Chemistry-2', 'Engineering Drawing', 'Structured Programming Approach', 'Communication Skills', 'Basic Workshop Practice-2']
      },
      sem3:{
        subjects: ['Applied Mathematics-3', 'Electronic Devices and Circuits-1', 'Digital System Design', 'Circuit Theory and Networks', 'Electronic Instrumentation and Control', 'Electronic Devices and Circuits-1 Lab', 'Digital System Design Lab', 'OOP using JAVA Lab']
      },
      sem4:{
        subjects: ['Applied Mathematics-4', 'Electronic Devices and Circuits-2', 'Linear Integrated Circuits', 'Signals & Systems', 'Principles of Communication Engineering', 'Electronic Devices and Circuits-2 Lab', 'Linear Integrated Circuits Lab', 'Principles of Communication Engineering Lab']
      },
      sem5:{
        subjects: ['Microprocessor & Peripherals Interfacing', 'Digital Communication', 'Electromagnetic Engineering', 'Discrete Time Signal Processing', 'Microprocessor & Peripherals Interfacing Lab', 'Digital Communication Lab', 'Business Communication & Ethics Lab', 'Open Source Technology for Communication Lab', 'Microelectronics', 'TV & Video Engineering', 'Finite Automata Theory', 'Data Compression and Encryption']}
        ,
      sem6:{
        subjects: ['Microcontrollers & Applications', 'Computer Communication Networks', 'Antenna & Radio Wvae Propagation', 'Image Processing and Machine Vision', 'Microcontrollers & Applications Lab', 'Computer Communication Networks Lab', 'Antenna & Radio Wvae Propagation Lab', 'Image Processing and Machine Vision Lab', 'Digital VLSI Design', 'Radar Engineering', 'Database management System', 'Audio Processing']}
        ,
      sem7:{
        subjects: ['Microwave Engineering', 'Mobile Communication System', 'Optical Communication', 'Microwave Engineering Lab', 'Mobile Communication System Lab', 'Optical Communication Lab', 'Project-1', 'Neural Network and Fuzzy Logic', 'Big Data Analytics', 'Internet Communication Engineering', 'CMOS Mixed Signal VLSI', 'Embedded System']}
        ,
      sem8:{
        subjects: ['RF Design', 'Wireless Networks', 'RF Design Lab', 'Wireless Networks Lab', 'Project-2', 'Optical Networks', 'Advanced Digital Signal Processing', 'Satellite Communication', 'Network management in Telecommunication', 'Project Management', 'Finance Management', 'Entrepreneurship Development and Management', 'Human Resourse Management', 'Professional Ethics and CSR', 'Research Methodology', 'IPR and Patening', 'Digital Business Management', 'Environmental Management']}
        
    },
    // Stream: Stream3
    {
      name: 'Electronics',
      abbreviation: 'ETRX',
      sem1:{
        subjects: ['Applied Mathematics-1', 'Applied Physics-1', 'Applied Chemistry-1', 'Engineering Mechanics', 'Basic Electrical Engineering', 'Environmental studies', 'Basic Workshop Practice-1']}
        ,
      sem2:{
        subjects: ['Applied Mathematics-2', 'Applied Physics-2', 'Applied Chemistry-2', 'Engineering Drawing', 'Structured Programming Approach', 'Communication Skills', 'Basic Workshop Practice-2']}
        ,
      sem3:{
        subjects: ['Applied Mathematics-3', 'Electronic Devices and Circuits-1', 'Digital Circuit Design', 'Electrical Network Analysis and Synthesis', 'Electronics Instruments and Measurement', 'Electronic Devices and Circuits-1 Lab', 'Digital Circuit Design Lab', 'Electrical Network and Measurement Lab', 'OOPM Lab']}
        ,
      sem4:{
        subjects: ['Applied Mathematics-4', 'Electronic Devices and Circuits-2', 'Microprocessors and Applications', 'Digital System Design', 'Principles of Communication Engineering', 'Linear Control Systems', 'Electronic Devices and Circuits-2 Lab', 'Microprocessors and Applications Lab', 'Digital System Design Lab', 'Principles of Communication Engineering Lab']}
        ,
      sem5:{
        subjects: ['Micro-controllers and Applications', 'Digital Communication', 'Engineering Electromagnetics', 'Design with Linear Integrated Circuits', 'Micro-controllers and Applications Lab', 'Digital Communication Lab', 'Design with Linear Integrated Circuits Lab', 'Business Communication & Ethics']}
        ,
      sem6:{
        subjects: ['Embedded System and RTOS', 'Computer Communication Network', 'VLSI Design', 'Signals and Systems', 'Embedded System and RTOS Lab', 'Computer Communication Network Lab', 'VLSI Design Lab']}
        ,
      sem7:{
        subjects: ['Instrumentation System Design', 'Power Electronics', 'Digital Signal processing', 'Instrumentation System Design Lab', 'Power Electronics Lab', 'Digital Signal processing Lab', 'Project-1']}
        ,
      sem8:{
        subjects: ['Internet of Things', 'Analog and Mixed VLSI Design', 'Internet of Things Lab', 'Instrumentation System Design Lab', 'Analog and Mixed VLSI Design Lab', 'Project-2']}
        
    },
    // Stream: Stream4
    {
      name: 'Mechanical',
      abbreviation: 'MECH',
      sem1:{
        subjects: ['Applied Mathematics-1', 'Applied Physics-1', 'Applied Chemistry-1', 'Engineering Mechanics', 'Basic Electrical Engineering', 'Environmental studies', 'Basic Workshop Practice-1']}
        ,
      sem2:{
        subjects: ['Applied Mathematics-2', 'Applied Physics-2', 'Applied Chemistry-2', 'Engineering Drawing', 'Structured Programming Approach', 'Communication Skills', 'Basic Workshop Practice-2']}
        ,
      sem3:{
        subjects: ['Applied Mathematics-3', 'Thermodynamics', 'Strength of Materials', 'Production Process-1', 'Material Technology', 'Computer Aided Machine Drawing', 'Machine Shop Practice-1']}
        ,
      sem4:{
        subjects: ['Applied Mathematics-4', 'Fluid Mechanics', 'Industrial Electronics', 'Production Process-2', 'Kinematics of Machinery', 'Data Base and Information Retrival', 'Machine Shop Practice-2']}
        ,
      sem5:{
        subjects: ['Internal Combustion Engines', 'Mechnical Measurements and Control', 'Heat Transfer', 'Dynamics of Machinery', 'Internal Combustion Engines', 'Manufacturing Sciences Lab', 'Business Communication and Ethics']}
        ,
      sem6:{
        subjects: ['Metrology and Quality Engineering', 'Mechine Design-1', 'Finite Element analysis', 'Refrigeration and Air Conditioning', 'Mechatronics Lab']}
        ,
      sem7:{
        subjects: ['Mechine Design-2', 'CAD/CAM/CAE', 'Production Planning and Control', 'Project-1']}
        ,
      sem8:{
        subjects: ['Design of Mechanical Systems', 'Industrial Engineering and Management', 'Power Engineering', 'Project-2']}
    },
    // Stream: Stream5
    {
      name: 'CIVIL',
      abbreviation: 'CIVIL',
      sem1:{
        subjects: ['Applied Mathematics-1', 'Applied Physics-1', 'Applied Chemistry-1', 'Engineering Mechanics', 'Basic Electrical Engineering', 'Environmental studies', 'Basic Workshop Practice-1']}
      ,
      sem2:{
        subjects: ['Applied Mathematics-2', 'Applied Physics-2', 'Applied Chemistry-2', 'Engineering Drawing', 'Structured Programming Approach', 'Communication Skills', 'Basic Workshop Practice-2']}
      ,
      sem3:{
        subjects: ['Applied Mathematics-3', 'Surveying-1', 'Strength of Materials', 'Engineering Geology', 'Fluid Mechnics-1']}
      ,
      sem4:{
        subjects: ['Applied Mathematics-4', 'Surveying-2', 'Structural Analysis-1', 'Builiding Design & Drawing', 'Building Materials & Construction Technology', 'Fluid Mechnics-2']}
      ,
      sem5:{
        subjects: ['Structural Analysis-2', 'Geotechnical Engg.-1', 'Applied Hydraulics', 'Environmental Engineering-1', 'Transportation Engineering-1', 'Advanced Surveying', 'Business and Communication Ethics', 'Advanced Concrete Technology', 'Building Services and Repairs', 'Advanced Structural Mechanics']}
      ,
      sem6:{
        subjects: ['Geotechnical Engg.-2', 'Design and Drawing of Steel structures', 'Transporting Engg.-2', 'Environmental Engg-2', 'Software Application in Civil Engineering', 'Advanced Construction Equipments', 'Traffic Engineering and Management', 'Ground Improvement Techniques', 'Advanced Structural Analysis']}
      ,
      sem7:{
        subjects: ['Quantity Survey Estimation and Valuation', 'Theory of Reinforced Concrete Structures', 'Water Resource Engineering-2', 'Project-1', 'Prestressed Concrete', 'Solid Waste management', 'Pavement Subgrade and Materials', 'Structural Dynamics', 'Application of GIS and Remote Snsing', 'Foundation Analysis and Design', 'Applied Hydrology and Flood Control', 'Product Life Cycle Management', 'Reliability Engineering', 'Management Information Systems', 'Design of Experiments', 'Operations Research', 'Cyber Security and Laws', 'Disaster Management and Mitigation Measures', 'Energy Audit and Management']}
      ,
      sem8:{
        subjects: ['Design and Drawing of Reinforced Concrete Structured', 'Construction Management', 'Advanced Design of Steel Structures', 'Project-2', 'Industrial Waste Treatment', 'Pavement Design and Construction', 'Bridge Engineering and Design', 'Apprasial and Implementation of Infrastructure Projects', 'Soil Dynamics', 'Design of Hydraulic Structures', 'Project Management', 'Finance Management', 'Entrepreneurship Development and Management', 'Human Resources Management', 'Professional Ethics and Corporate Social Responsibility(CSR)', 'Research Methodology', 'Intellectual Property Rights an Patenting', 'Environment Management', 'Digital Business Management']}
    },
  ]

  streams = [
    {name: 'Computers', abbreviation: 'CMPN'},
    {name: 'Electrical', abbreviation: 'ELEC'},
    {},
    {name: 'Information Technology', abbreviation: 'IT'},
    
  ];
  subjects = [
    {name: 'AOA', abbreviation: 'CMPN'},
    {name: 'AISC', abbreviation: 'ELEC'},
    {name: 'ASDF', abbreviation: 'MECH'},
    {name: 'CSL', abbreviation: 'IT'},
    
  ];
  semesters = [
    {name: 'SEM 1', abbreviation: 'CMPN'},
    {name: 'SEM 2', abbreviation: 'ELEC'},
    {name: 'SEM 3', abbreviation: 'MECH'},
    {name: 'SEM 4', abbreviation: 'IT'},
    
  ];
  modules = [
    {name: 'Template 1', abbreviation: 'CMPN'},
    {name: 'Template 2', abbreviation: 'ELEC'},
    
    
  ];
  questionTypes = [
    {name: 'Short Note', abbreviation: 'CMPN'},
    {name: 'Differentiate', abbreviation: 'ELEC'},
    {name: 'Brief', abbreviation: 'MECH'},
    {name: 'Numerical', abbreviation: 'IT'},
  ];
  difficultyLevels = [
    {name: 'Easy', abbreviation: 'CMPN'},
    {name: 'Moderate', abbreviation: 'ELEC'},
    {name: 'Hard', abbreviation: 'MECH'},
    
    
  ];
  taxonomyLevels = [
    {name: 'Evaluation', abbreviation: 'CMPN'},
    {name: 'Understanding', abbreviation: 'ELEC'},
   
    
  ];
  maxmarks = [
    {name: '80 END SEM', abbreviation: 'CMPN'},
    {name: '20 TERM TEST', abbreviation: 'ELEC'},
   
    
  ];
  
  

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}