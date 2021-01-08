import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,  Validators } from '@angular/forms';
import { PdfMakeService } from 'src/app/services/pdf-make.service';

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

  subjectList = []

  stream2 = [
    // Stream: Computers
    {
      name: 'Computers',
      abbreviation: 'CMPN',
      I:{
        subjects: ['Applied Maths', 'Applied Physics','Applied Chemistry', 'EVS','BEE','Enigineering Mechanics']
      },
      II:{
        subjects: ['Applied Mathematics-2', 'Applied Physics-2', 'Applied Chemistry-2', 'Engineering Drawing', 'Structured Programming Approach', 'Communication Skills', 'Basic Workshop Practice-2']
      },
      III:{
        subjects: ['Applied Mathematics-3', 'Digital Logic Design and Analysis', 'Discrete Mathematics', 'Electronic Circuits and Communication Fundamentals', 'Data Structures', 'Digital System Lab', 'Basic Electronics Lab', 'Data Structure Lab', 'OOPM(JAVA)Lab']
      },
      IV:{
        subjects: ['Applied Mathematics-4', 'Analysis of Algorithms', 'Computer Organization and Architecture', 'Computer Graphics', 'Operating System', 'Analysis of Algorithms Lab', 'Computer Graphics Lab', 'Processor Architecture Lab', 'Operating System Lab', 'Open Source Tech Lab']
      },
      V:{
        subjects: ['Microprocessor', 'Database Management System', 'Computer Network', 'Theory of Computer Science', 'Microprocessor Lab', 'Computer Network Lab', 'Database & Info. System Lab', 'Web Design Lab', 'Business Comm. & Ethics']
      },
      VI:{
        subjects: ['Software Engineering', 'System Programming & Complier Construction', 'Data Warehousing & Mining', 'Cryptography & System Security', 'Software Engineering Lab', 'System software Lab', 'Data warehousing & Mining Lab', 'System Security Lab', 'Mini-Project']
      },
      VII:{
        subjects: ['Digital Signal & Image Processing', 'Mobile Communication & Computing', 'Artificial Intelligence & Soft Computing', 'Digital Signal & Image Processing Lab', 'Mobile App. Development. Tech. Lab', 'Artificial Intelligence & Soft Computing Lab', 'Computational Lab-1', 'Major Project-1']
      },
      VIII:{
        subjects: ['Human Machine Interaction', 'Distributed Computing', 'Human Machine Interaction Lab', 'Distributed Computing Lab', 'Cloud Computing Lab', 'Computational Lab-2', 'Major Project-2']
      }
    },
    // Stream: Stream2
    {
      name: 'Electronics and Telecommunication',
      abbreviation: 'EXTC',
      I:{
        subjects: ['Applied Mathematics-1', 'Applied Physics-1', 'Applied Chemistry-1', 'Engineering Mechanics', 'Basic Electrical Engineering', 'Environmental studies', 'Basic Workshop Practice-1']
      },
      II:{
        subjects: ['Applied Mathematics-2', 'Applied Physics-2', 'Applied Chemistry-2', 'Engineering Drawing', 'Structured Programming Approach', 'Communication Skills', 'Basic Workshop Practice-2']
      },
      III:{
        subjects: ['Applied Mathematics-3', 'Electronic Devices and Circuits-1', 'Digital System Design', 'Circuit Theory and Networks', 'Electronic Instrumentation and Control', 'Electronic Devices and Circuits-1 Lab', 'Digital System Design Lab', 'OOP using JAVA Lab']
      },
      IV:{
        subjects: ['Applied Mathematics-4', 'Electronic Devices and Circuits-2', 'Linear Integrated Circuits', 'Signals & Systems', 'Principles of Communication Engineering', 'Electronic Devices and Circuits-2 Lab', 'Linear Integrated Circuits Lab', 'Principles of Communication Engineering Lab']
      },
      V:{
        subjects: ['Microprocessor & Peripherals Interfacing', 'Digital Communication', 'Electromagnetic Engineering', 'Discrete Time Signal Processing', 'Microprocessor & Peripherals Interfacing Lab', 'Digital Communication Lab', 'Business Communication & Ethics Lab', 'Open Source Technology for Communication Lab', 'Microelectronics', 'TV & Video Engineering', 'Finite Automata Theory', 'Data Compression and Encryption']
      }
        ,
      VI:{
        subjects: ['Microcontrollers & Applications', 'Computer Communication Networks', 'Antenna & Radio Wvae Propagation', 'Image Processing and Machine Vision', 'Microcontrollers & Applications Lab', 'Computer Communication Networks Lab', 'Antenna & Radio Wvae Propagation Lab', 'Image Processing and Machine Vision Lab', 'Digital VLSI Design', 'Radar Engineering', 'Database management System', 'Audio Processing']}
        ,
      VII:{
        subjects: ['Microwave Engineering', 'Mobile Communication System', 'Optical Communication', 'Microwave Engineering Lab', 'Mobile Communication System Lab', 'Optical Communication Lab', 'Project-1', 'Neural Network and Fuzzy Logic', 'Big Data Analytics', 'Internet Communication Engineering', 'CMOS Mixed Signal VLSI', 'Embedded System']}
        ,
      VIII:{
        subjects: ['RF Design', 'Wireless Networks', 'RF Design Lab', 'Wireless Networks Lab', 'Project-2', 'Optical Networks', 'Advanced Digital Signal Processing', 'Satellite Communication', 'Network management in Telecommunication', 'Project Management', 'Finance Management', 'Entrepreneurship Development and Management', 'Human Resourse Management', 'Professional Ethics and CSR', 'Research Methodology', 'IPR and Patening', 'Digital Business Management', 'Environmental Management']}
        
    },
    // Stream: Stream3
    {
      name: 'Electronics',
      abbreviation: 'ELEC',
      I:{
        subjects: ['Applied Mathematics-1', 'Applied Physics-1', 'Applied Chemistry-1', 'Engineering Mechanics', 'Basic Electrical Engineering', 'Environmental studies', 'Basic Workshop Practice-1']}
        ,
      II:{
        subjects: ['Applied Mathematics-2', 'Applied Physics-2', 'Applied Chemistry-2', 'Engineering Drawing', 'Structured Programming Approach', 'Communication Skills', 'Basic Workshop Practice-2']}
        ,
      III:{
        subjects: ['Applied Mathematics-3', 'Electronic Devices and Circuits-1', 'Digital Circuit Design', 'Electrical Network Analysis and Synthesis', 'Electronics Instruments and Measurement', 'Electronic Devices and Circuits-1 Lab', 'Digital Circuit Design Lab', 'Electrical Network and Measurement Lab', 'OOPM Lab']}
        ,
      IV:{
        subjects: ['Applied Mathematics-4', 'Electronic Devices and Circuits-2', 'Microprocessors and Applications', 'Digital System Design', 'Principles of Communication Engineering', 'Linear Control Systems', 'Electronic Devices and Circuits-2 Lab', 'Microprocessors and Applications Lab', 'Digital System Design Lab', 'Principles of Communication Engineering Lab']}
        ,
      V:{
        subjects: ['Micro-controllers and Applications', 'Digital Communication', 'Engineering Electromagnetics', 'Design with Linear Integrated Circuits', 'Micro-controllers and Applications Lab', 'Digital Communication Lab', 'Design with Linear Integrated Circuits Lab', 'Business Communication & Ethics']}
        ,
      VI:{
        subjects: ['Embedded System and RTOS', 'Computer Communication Network', 'VLSI Design', 'Signals and Systems', 'Embedded System and RTOS Lab', 'Computer Communication Network Lab', 'VLSI Design Lab']}
        ,
      VII:{
        subjects: ['Instrumentation System Design', 'Power Electronics', 'Digital Signal processing', 'Instrumentation System Design Lab', 'Power Electronics Lab', 'Digital Signal processing Lab', 'Project-1']}
        ,
      VIII:{
        subjects: ['Internet of Things', 'Analog and Mixed VLSI Design', 'Internet of Things Lab', 'Instrumentation System Design Lab', 'Analog and Mixed VLSI Design Lab', 'Project-2']}
        
    },
    // Stream: Stream4
    {
      name: 'Mechanical',
      abbreviation: 'MECH',
      I:{
        subjects: ['Applied Mathematics-1', 'Applied Physics-1', 'Applied Chemistry-1', 'Engineering Mechanics', 'Basic Electrical Engineering', 'Environmental studies', 'Basic Workshop Practice-1']}
        ,
      II:{
        subjects: ['Applied Mathematics-2', 'Applied Physics-2', 'Applied Chemistry-2', 'Engineering Drawing', 'Structured Programming Approach', 'Communication Skills', 'Basic Workshop Practice-2']}
        ,
      III:{
        subjects: ['Applied Mathematics-3', 'Thermodynamics', 'Strength of Materials', 'Production Process-1', 'Material Technology', 'Computer Aided Machine Drawing', 'Machine Shop Practice-1']}
        ,
      IV:{
        subjects: ['Applied Mathematics-4', 'Fluid Mechanics', 'Industrial Electronics', 'Production Process-2', 'Kinematics of Machinery', 'Data Base and Information Retrival', 'Machine Shop Practice-2']}
        ,
      V:{
        subjects: ['Internal Combustion Engines', 'Mechnical Measurements and Control', 'Heat Transfer', 'Dynamics of Machinery', 'Internal Combustion Engines', 'Manufacturing Sciences Lab', 'Business Communication and Ethics']}
        ,
      VI:{
        subjects: ['Metrology and Quality Engineering', 'Mechine Design-1', 'Finite Element analysis', 'Refrigeration and Air Conditioning', 'Mechatronics Lab']}
        ,
      VII:{
        subjects: ['Mechine Design-2', 'CAD/CAM/CAE', 'Production Planning and Control', 'Project-1']}
        ,
      VIII:{
        subjects: ['Design of Mechanical Systems', 'Industrial Engineering and Management', 'Power Engineering', 'Project-2']}
    },
    // Stream: Stream5
    {
      name: 'CIVIL',
      abbreviation: 'CIVIL',
      I:{
        subjects: ['Applied Mathematics-1', 'Applied Physics-1', 'Applied Chemistry-1', 'Engineering Mechanics', 'Basic Electrical Engineering', 'Environmental studies', 'Basic Workshop Practice-1']
      }
      ,
      II:{
        subjects: ['Applied Mathematics-2', 'Applied Physics-2', 'Applied Chemistry-2', 'Engineering Drawing', 'Structured Programming Approach', 'Communication Skills', 'Basic Workshop Practice-2']
      }
      ,
      III:{
        subjects: ['Applied Mathematics-3', 'Surveying-1', 'Strength of Materials', 'Engineering Geology', 'Fluid Mechnics-1']}
      ,
      IV:{
        subjects: ['Applied Mathematics-4', 'Surveying-2', 'Structural Analysis-1', 'Builiding Design & Drawing', 'Building Materials & Construction Technology', 'Fluid Mechnics-2']}
      ,
      V:{
        subjects: ['Structural Analysis-2', 'Geotechnical Engg.-1', 'Applied Hydraulics', 'Environmental Engineering-1', 'Transportation Engineering-1', 'Advanced Surveying', 'Business and Communication Ethics', 'Advanced Concrete Technology', 'Building Services and Repairs', 'Advanced Structural Mechanics']}
      ,
      VI:{
        subjects: ['Geotechnical Engg.-2', 'Design and Drawing of Steel structures', 'Transporting Engg.-2', 'Environmental Engg-2', 'Software Application in Civil Engineering', 'Advanced Construction Equipments', 'Traffic Engineering and Management', 'Ground Improvement Techniques', 'Advanced Structural Analysis']}
      ,
      VII:{
        subjects: ['Quantity Survey Estimation and Valuation', 'Theory of Reinforced Concrete Structures', 'Water Resource Engineering-2', 'Project-1', 'Prestressed Concrete', 'Solid Waste management', 'Pavement Subgrade and Materials', 'Structural Dynamics', 'Application of GIS and Remote Snsing', 'Foundation Analysis and Design', 'Applied Hydrology and Flood Control', 'Product Life Cycle Management', 'Reliability Engineering', 'Management Information Systems', 'Design of Experiments', 'Operations Research', 'Cyber Security and Laws', 'Disaster Management and Mitigation Measures', 'Energy Audit and Management']}
      ,
      VIII:{
        subjects: ['Design and Drawing of Reinforced Concrete Structured', 'Construction Management', 'Advanced Design of Steel Structures', 'Project-2', 'Industrial Waste Treatment', 'Pavement Design and Construction', 'Bridge Engineering and Design', 'Apprasial and Implementation of Infrastructure Projects', 'Soil Dynamics', 'Design of Hydraulic Structures', 'Project Management', 'Finance Management', 'Entrepreneurship Development and Management', 'Human Resources Management', 'Professional Ethics and Corporate Social Responsibility(CSR)', 'Research Methodology', 'Intellectual Property Rights an Patenting', 'Environment Management', 'Digital Business Management']}
    },
  ]

  streams = [
    {name: 'Computers', abbreviation: 'CMPN'},
    {name: 'Eectronics and Telecommunication', abbreviation: 'EXTC'},
    {name: 'Electronics', abbreviation: 'ELEC'},
    {name: 'Mechanical', abbreviation: 'MECH'},
    {name: 'Civil', abbreviation: 'CIVIL'},
  ];

  patterns = []

  subjects = [];
  semesters = ['I','II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
  eightyPattern = [
    {name: '20-20-20-20'},
    {name: '40-20-20'},
  ];
  twentyPattern = [
    {name: '5-5-5-5'}
  ]
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
    {name: '80 END SEM', abbreviation: '80'},
    {name: '20 TERM TEST', abbreviation: '20'},
  ];

  constructor(
    private fb: FormBuilder,
    private pdfMaker: PdfMakeService
    ) {}

  onStreamChange(){

    if(this.addressForm.value.stream && this.addressForm.value.semester){
      this.subjectList = this.stream2.filter( stream => stream.abbreviation === this.addressForm.value.stream && stream.hasOwnProperty(this.addressForm.value.semester))
    }
    if(this.addressForm.value.semester === 'I'){
      this.subjects = this.subjectList[0].I.subjects
    }
    if(this.addressForm.value.semester === 'II'){
      this.subjects = this.subjectList[0].II.subjects
    }
    if(this.addressForm.value.semester === 'III'){
      this.subjects = this.subjectList[0].III.subjects
    }
    if(this.addressForm.value.semester === 'IV'){
      this.subjects = this.subjectList[0].IV.subjects
    }
    if(this.addressForm.value.semester === 'V'){
      this.subjects = this.subjectList[0].V.subjects
    }
    if(this.addressForm.value.semester === 'VI'){
      this.subjects = this.subjectList[0].VI.subjects
    }
    if(this.addressForm.value.semester === 'VII'){
      this.subjects = this.subjectList[0].VII.subjects
    }
    if(this.addressForm.value.semester === 'VIII'){
      this.subjects = this.subjectList[0].VIII.subjects
    }
  }

  onSemChange(){

    if(this.addressForm.value.semester && this.addressForm.value.stream){
      this.subjectList = this.stream2.filter( stream => stream.abbreviation === this.addressForm.value.stream && stream.hasOwnProperty(this.addressForm.value.semester))
    }
    if(this.addressForm.value.semester === 'I'){
      this.subjects = this.subjectList[0].I.subjects
    }
    if(this.addressForm.value.semester === 'II'){
      this.subjects = this.subjectList[0].II.subjects
    }
    if(this.addressForm.value.semester === 'III'){
      this.subjects = this.subjectList[0].III.subjects
    }
    if(this.addressForm.value.semester === 'IV'){
      this.subjects = this.subjectList[0].IV.subjects
    }
    if(this.addressForm.value.semester === 'V'){
      this.subjects = this.subjectList[0].V.subjects
    }
    if(this.addressForm.value.semester === 'VI'){
      this.subjects = this.subjectList[0].VI.subjects
    }
    if(this.addressForm.value.semester === 'VII'){
      this.subjects = this.subjectList[0].VII.subjects
    }
    if(this.addressForm.value.semester === 'VIII'){
      this.subjects = this.subjectList[0].VIII.subjects
    }
  }

  onMarksSelect(){
    if(this.addressForm.value.maxmark === '80'){
      this.patterns = this.eightyPattern
    }
    if(this.addressForm.value.maxmark === '20'){
      this.patterns = this.twentyPattern
    }
    // console.log(typeof(this.addressForm.value.maxmark) )
  }

  onSubmit() {
    console.log(this.addressForm.value)
    let data = { content: [
      'Question 1',
      'Question 2',
      'Question 3',
      'Question 4'
    ]}

    this.pdfMaker.generatePdf(data)
  }
}