import React from 'react'
import TestFont from './../fonts/NatureBeautyPersonalUse-9Y2DK.ttf'
import { Document, Page, Text, View, StyleSheet ,PDFViewer,Line,Font} from '@react-pdf/renderer';

//https://github.com/diegomura/react-pdf/tree/master/packages/examples/src/resume/

//for using fonts we have to download fonts and import it, then register
Font.register({
  family: "Test",
  src: TestFont,
  })

//This is the CSS part of PDF, make sure that it is same as the preview CSS- for this one it should be similar to templateC.css
//following is almost similar to css file, while creating original templates please note above point
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'black',
    margin:'0px',
    width: '100%',
    color:'aliceblue'
  },
  section: {
    flexDirection: 'column',
  },
  name:{
    borderBottom: '1px'
  },
  title:{
    color:'brown',
    marginVertical:'7px'

  },
  flexRow:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'left',
    alignItems:'center',
    marginLeft:'20px'
  },
  bullets:{

    marginLeft:'2px',
    marginRight:'8px' 
  }
});

const DownloadDocumentA = ({resumeData}) => {
  const {name,address,skills,careerObjective,academics} = resumeData
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.name}>  {name}</Text>
          <Line><hr/></Line>
        </View>
        <View style={styles.section}>
          <Text  style={styles.title}>Address</Text>
          <Text>{address}</Text>
        </View>
        <View style={styles.section}>
          <Text  style={styles.title} >Academics</Text>
          {academics?.map(val => {
            return (
              val.value.trim() !=='' && <View key={val.id} style={styles.flexRow}>
                <Text style={styles.bullets} >•</Text>
                <Text> {val.value}</Text>
                </View>
            )
          })}        
        </View>
        <View style={styles.section}>
          <Text  style={styles.title}>Skills</Text>
          <Text>{skills}</Text>     
        </View>
        <View style={styles.section}>
          <Text  style={styles.title}>Career Objective</Text>
          <Text>{careerObjective}</Text>     
        </View>
      </Page>
  </Document>  
  )
}



const TemplateC = ({resumeData}) => (
  <PDFViewer >
    <DownloadDocumentA resumeData={resumeData} />
  </PDFViewer> 
);

export default TemplateC

