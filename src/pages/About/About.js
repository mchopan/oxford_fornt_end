import { Box } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { motion } from 'framer-motion'


const About = () => {

    // Courses
    const rows = [
        { title: "O Level", code1: "Full - O0301", code2: "O0963", date: "28/01/2002" },
        { title: "A Level", code1: "Prov-A0244", code2: "A0272", date: "04/11/2000" },
        { title: "B Level(equivalent to MCA)", code1: "Prov-B0092", code2: "B0101", date: "11/07/2003" }
    ];

    // Infrastructure
    const row2 = [
        { id: '1', particulars: "Class Rooms", noOfIems: '9' },
        { id: '2', particulars: "Computer Labs", noOfIems: '4' },
        { id: '3', particulars: "Library", noOfIems: '1' },
        { id: '4', particulars: "Principals Office", noOfIems: '1' },
        { id: '5', particulars: "Staff Room", noOfIems: '2' },
        { id: '6', particulars: "Counsellor's Office", noOfIems: '1' },
        { id: '7', particulars: "Toilets", noOfIems: '7' },
        { id: '8', particulars: "Generator Rooms", noOfIems: '2' },
    ];

    // Hardware
    const row3 = [
        { id: '1', particulars: "Total No. of Computers", noOfIems: '60' },
        { id: '2', particulars: "Scanners", noOfIems: '1' },
        { id: '3', particulars: "Printers", noOfIems: '3' },
        { id: '4', particulars: "Digital Camera", noOfIems: '1' },
        { id: '5', particulars: "Web Camera", noOfIems: '1' },
        { id: '6', particulars: "TV Based Projector System", noOfIems: '1' },
        { id: '7', particulars: "Manual Projector", noOfIems: '1' },
        { id: '8', particulars: "Modem", noOfIems: '1' },
        { id: '9', particulars: "Photo Copier", noOfIems: '1' },
        { id: '10', particulars: "CD Writer", noOfIems: '2' },
        { id: '11', particulars: "CD Writer", noOfIems: '1' },
        { id: '12', particulars: "CVT(2KVA)", noOfIems: '9' },
        { id: '13', particulars: "CVT(5KVA)", noOfIems: '1' },
        { id: '14', particulars: "35KVA Diesel Genset", noOfIems: '1' },
        { id: '15', particulars: "10KVA Diesel Genset", noOfIems: '1' },
        { id: '16', particulars: "2KVA Petrol Genset", noOfIems: '3' },
    ];

    const transition = {
        duration: 0.3,
        ease: 'easeOut',
    };

    const variants = {
        enter: {
            x: '-100%',
            opacity: 0,
        },
        center: {
            x: 0,
            opacity: 1,
            transition,
        },
        exit: {
            x: '100%',
            opacity: 0,
            transition,
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"

        >
            <Typography sx={{ borderBottom: '2px solid black' }} variant="h5" textAlign="center" color="white" backgroundColor="gray">
                About Us
            </Typography>
            <Box sx={{ margin: { xs: '0px 20px', md: '0px 50px' } }}>
                <Box sx={{ padding: '5px' }}>
                    <Typography variant="h6" color="#0077c2" textAlign='center' >
                        The Founding Principles of Our Institute: An Overview
                    </Typography>
                    <Typography variant="body2" >
                        In 1974, Prof. C. L. Vishen founded CASET as a laboratory school for his research in education and school management. It quickly gained a reputation as a leading school in the valley. Since then, CASET has expanded its educational offerings to the valley's students, including two high schools and a middle school. Over 2500 students now receive education from CASET. Additionally, CASET has established two postgraduate colleges: the Nund Reshi College of Education, offering a B.Ed. program affiliated with Kashmir University, and CASET postgraduate evening college, which provides regular teaching facilities for M.A. and M.Sc. programs in mathematics, commerce, sociology, and other fields under the affiliation of Kashmir University. CASET has played a vital role in bringing educational opportunities to the valley's students.
                    </Typography>
                </Box>
                <hr />
                <Box sx={{ padding: '5px' }}>
                    <Typography variant="h6" color='#0077c2' textAlign='center'>
                        CASET College of Computer Science & Engineering
                    </Typography>
                    <Typography variant="body2" >
                        In 1986, the College was established with a purpose to offer a diploma in computer science to the students of the valley. In just four years, the College had produced over 300 diploma holders who are now making significant contributions in various capacities across India and abroad. However, in 1990, a devastating fire gutted the College to ashes. After years of reconstruction, the College finally reopened its doors in July 1997. Today, the CASET College of Computer Sciences is once again breaking new grounds in providing quality computer education to the students of the valley. Affiliated with DOEACC, an autonomous body of the Ministry of Information Technology, Govt. of India, the College offers 'O', 'A', and 'B' Level courses to its students.
                    </Typography>
                    <br />
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: 'gray' }}>
                                    <TableCell align='center' sx={{ fontSize: 'calc(10px + 0.5vw)' }}>Level</TableCell>
                                    <TableCell align='center' sx={{ fontSize: 'calc(10px + 0.5vw)' }}>Full/Prov.No.</TableCell>
                                    <TableCell align='center' sx={{ fontSize: 'calc(10px + 0.5vw)' }}>ACCR. No.</TableCell>
                                    <TableCell align='center' sx={{ fontSize: 'calc(10px + 0.5vw)' }}>Accreditation Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.title}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align='center' component="th" scope="row" sx={{ fontSize: 'calc(8px + 0.5vw)' }}>
                                            {row.title}
                                        </TableCell>
                                        <TableCell align='center' sx={{ fontSize: 'calc(8px + 0.5vw)' }}>{row.code1}</TableCell>
                                        <TableCell align='center' sx={{ fontSize: 'calc(8px + 0.5vw)' }}>{row.code2}</TableCell>
                                        <TableCell align='center' sx={{ fontSize: 'calc(8px + 0.5vw)' }}>{row.date}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <br />
                    <Typography variant='body2'>The College is also affiliated with Kashmir University for BCA (Bachelor in Computer Applications) & PGDCA (Post Graduate Diploma In Computer Applications).</Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: 'gray' }}>
                                    <TableCell align='center' sx={{ fontSize: 'calc(10px + 0.5vw)' }}>Course</TableCell>
                                    <TableCell align='center' sx={{ fontSize: 'calc(10px + 0.5vw)' }}>Notification No.</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align='center' component="th" scope="row" sx={{ fontSize: 'calc(8px + 0.5vw)' }}>
                                        BCA
                                    </TableCell>
                                    <TableCell align='center' sx={{ fontSize: 'calc(8px + 0.5vw)' }}>F(Affi-BCA/CASET)Acad/KU/02</TableCell>

                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align='center' component="th" scope="row" sx={{ fontSize: 'calc(8px + 0.5vw)' }}>
                                        PGDCA
                                    </TableCell>
                                    <TableCell align='center' sx={{ fontSize: 'calc(8px + 0.5vw)' }}>F(Affi-PGDCA)Acad/KU/293</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <br />
                <Box sx={{ padding: '5px' }}>
                    <Typography variant="h6" color="#0077c2" textAlign='center' >
                        Vision and Future Role in the Development of Indian IT Industry
                    </Typography>
                    <Typography variant="body2" >
                        To support the growth of the Indian IT industry by providing high-quality education in the non-formal sector, keeping up with changing industry needs and technological trends, and meeting the country's workforce needs.
                    </Typography>
                </Box>
                <hr />
                <Box sx={{ padding: '5px' }}>
                    <Typography variant="h6" color="#0077c2" textAlign='center' >
                        Mission of the institute as quality IT education provider
                    </Typography>
                    <Typography variant="body2" >
                        a) We aim to offer IT education and training at different levels to help address the gap between the demand for skilled professionals in the country and the number of graduates in the formal sector.
                        <br />
                        b) We want to create a system to certify the competency of IT education and training in the non-formal sector.
                        <br />
                        c) We aim to improve the knowledge and skills of our faculty and have a continuous training program to help them conduct courses that are accredited by DOEACC.
                    </Typography>
                </Box>
                <hr />
                <Box sx={{ padding: '5px' }}>
                    <Typography variant="h3" color="#0077c2" textAlign='center' >
                        Infrastructure
                        <Typography variant="h6" color="#0077c2" textAlign='center' >
                            Organizational & Infrastructural Facilities
                        </Typography>
                    </Typography>
                    <br />
                    <Typography variant='h6' color="#0077c2" textAlign='center'>
                        Organizational Structure
                    </Typography>
                    <Typography variant="body2" >
                        CASET Educational Society is a Society registered under societies Act and is headed by the President Ms R.D.Vishen. The College is headed by Mr. Vinod Vishen.
                    </Typography>
                </Box>
                <hr />
                <Box sx={{ padding: '5px' }}>
                    <Typography variant='h6' color="#0077c2" textAlign='center'>
                        Previous Results
                    </Typography>
                    <Typography variant="body2" >
                        CASET has demonstrated exceptional results, with 26 of our students achieving a perfect score of 100% in the national exams conducted by DOEACC.
                    </Typography>
                </Box>
                <hr />
                <br />
                <Box sx={{ padding: '5px' }}>
                    <Typography variant="h4" color="#0077c2" textAlign='center' >
                        Infrastructure facilities available at CASET
                        <Typography variant="h6" color="#0077c2" textAlign='center' >
                            Existing Infrastructure
                        </Typography>
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: 'gray' }}>
                                    <TableCell align='center' sx={{ fontSize: 'calc(10px + 0.5vw)' }}>S.NO</TableCell>
                                    <TableCell align='center' sx={{ fontSize: 'calc(10px + 0.5vw)' }}>Particulars</TableCell>
                                    <TableCell align='center' sx={{ fontSize: 'calc(10px + 0.5vw)' }}>No. of Items</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {row2.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align='center' component="th" scope="row" sx={{ fontSize: 'calc(8px + 0.5vw)' }}>
                                            {row.id}
                                        </TableCell>
                                        <TableCell align='center' sx={{ fontSize: 'calc(8px + 0.5vw)' }}>{row.particulars}</TableCell>
                                        <TableCell align='center' sx={{ fontSize: 'calc(8px + 0.5vw)' }}>{row.noOfIems}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <br />
                <Box sx={{ padding: '5px' }}>
                    <Typography variant="h6" color="#0077c2" textAlign='center' >
                        Space Available for Further Development
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: 'gray' }}>
                                    <TableCell align='center' sx={{ fontSize: 'calc(10px + 0.5vw)' }}>S.NO</TableCell>
                                    <TableCell align='center' sx={{ fontSize: 'calc(10px + 0.5vw)' }}>Particulars</TableCell>
                                    <TableCell align='center' sx={{ fontSize: 'calc(10px + 0.5vw)' }}>No. of Items</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align='center' component="th" scope="row" sx={{ fontSize: 'calc(8px + 0.5vw)' }}>
                                        1
                                    </TableCell>
                                    <TableCell align='center' sx={{ fontSize: 'calc(8px + 0.5vw)' }}>Lab of 30 Computers</TableCell>
                                    <TableCell align='center' sx={{ fontSize: 'calc(8px + 0.5vw)' }}>1</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align='center' component="th" scope="row" sx={{ fontSize: 'calc(8px + 0.5vw)' }}>
                                        2
                                    </TableCell>
                                    <TableCell align='center' sx={{ fontSize: 'calc(8px + 0.5vw)' }}>Class Room of 60 Students</TableCell>
                                    <TableCell align='center' sx={{ fontSize: 'calc(8px + 0.5vw)' }}>2</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <br />
                <Box sx={{ padding: '5px' }}>
                    <Typography variant="h6" color="#0077c2" textAlign='center' >
                        Hardware Availabity
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: 'gray' }}>
                                    <TableCell align='center' sx={{ fontSize: 'calc(10px + 0.5vw)' }}>S.NO</TableCell>
                                    <TableCell align='center' sx={{ fontSize: 'calc(10px + 0.5vw)' }}>Particulars</TableCell>
                                    <TableCell align='center' sx={{ fontSize: 'calc(10px + 0.5vw)' }}>No. of Items</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {row3.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align='center' component="th" scope="row" sx={{ fontSize: 'calc(8px + 0.5vw)' }}>
                                            {row.id}
                                        </TableCell>
                                        <TableCell align='center' sx={{ fontSize: 'calc(8px + 0.5vw)' }}>{row.particulars}</TableCell>
                                        <TableCell align='center' sx={{ fontSize: 'calc(8px + 0.5vw)' }}>{row.noOfIems}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <br />
                <Box sx={{ padding: '5px' }}>
                    <Typography variant="h6" color="#0077c2" textAlign='center' >
                        Library Facilities
                    </Typography>
                    <Typography variant="body2" >
                        Our library boasts a wide selection of text and reference books, providing ample resources for our students. In addition, we subscribe to all major magazines, ensuring that our students have access to the latest publications in their field of study
                    </Typography>
                </Box>
            </Box>
        </motion.div>
    )
}

export default About