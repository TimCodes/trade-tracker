import axios from 'axios'; 
let baseUrl = "";

export const gradeQualifier = (grader = {}, qualifierForm = {}) => {
    let formQuestions      = qualifierForm.questions;
    let graderQuestions    = grader.questions;
    let totalScore         = 0;

    for (var question in formQuestions) {
        if (formQuestions.hasOwnProperty(question)) {
            let questionAnswers   = graderQuestions[question];
            let formAnswer        = formQuestions[question];
            let score             = questionAnswers[formAnswer]; 
            totalScore            += score;
            
        }
    }
    // axios.get(`${baseUrl}/grader`, grader)
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))    

    return { score : totalScore, graderScore: totalScore / grader.totalScore }

   // return console.log("fuksjdflksdj")
};

export const getGrader = (graderId = null) => {
    //   axios.get(`${baseUrl}/graders/${graderId}`, grader)
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))   
}



let q = {
    questions : {
         0 : {
             true: 0,
             false: 1
         },
         
         1: {
             
            "shortAccum"  : 2,
            "medAccum"    : 1,
            "longAccum"   : 0
                   
         }
    },
    totalScore: 3
}

let qForm = {
    questions : {
         0 : true,
         
         1 :   "shortAccum",

                   
    }
}

let score = gradeQualifier(q, qForm)

console.log(score)