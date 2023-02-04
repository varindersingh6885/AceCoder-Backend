import axios from 'axios'
import Problem from '../models/problemModel.js';

const execute = async (req, res) => {
    const {script, language,stdin} = req.body

    const program = {
        "script" : script,
        "stdin" : stdin,
        "language" : language,
        "versionIndex": "0",
        "clientId": `${process.env.CLIENT_ID}`,
        "clientSecret":`${process.env.CLIENT_SECRET}`
    }
    
    // to depict a single test case
    program.stdin = `1\n${program.stdin}`;

    const config = {
        headers: {
          "Content-Type": "application/json"
        },
      };

    try {
        // console.log(program.stdin);
        const {data} = await axios.post('https://api.jdoodle.com/v1/execute',program , config)
        res.json(data);
        // res.json({output : "Hold On for a sec"})
    } catch (error) {
        console.log('error :')
        console.log(error);
        res.send(error);
    }
}

const customInputEvaluate = async (req, res) => {
    const {script, language,stdin} = req.body
    const problemId = req.params.problemId;

    const program = {
        "script" : script,
        "stdin" : stdin,
        "language" : language,
        "versionIndex": "0",
        "clientId": `${process.env.CLIENT_ID}`,
        "clientSecret":`${process.env.CLIENT_SECRET}`
    }
    try {
        const problem = await Problem.findOne({_id : problemId});

        const solution = problem.solution;
        
        for(let i=0; i<solution.length; i++){
            if(solution[i].language===language){
                program.script = program.script+solution[i].code;
                break;
            }
        }
        const caseCustomInput = 1;
        program.stdin = `${caseCustomInput}\n${program.stdin}`;
    } catch (error) {
        console.log("facing error");
        console.log(error);
    }
    const config = {
        headers: {
          "Content-Type": "application/json"
        },
    };

    try {
        // console.log(program.stdin);
        const {data} = await axios.post('https://api.jdoodle.com/v1/execute',program , config)
        res.json(data);
        // res.json({output : program.stdin})
    } catch (error) {
        console.log('error :')
        console.log(error);
        res.send(error);
    }
}

const submissionEvaluate = async (req, res) => {
    const {script, language,stdin} = req.body
    const problemId = req.params.problemId;

    const program = {
        "script" : script,
        "stdin" : stdin,
        "language" : language,
        "versionIndex": "0",
        "clientId": `${process.env.CLIENT_ID}`,
        "clientSecret":`${process.env.CLIENT_SECRET}`
    }
    try {
        const problem = await Problem.findOne({_id : problemId});

        const solution = problem.solution;
        
        for(let i=0; i<solution.length; i++){
            if(solution[i].language===language){
                program.script = program.script+solution[i].code;
                break;
            }
        }
        // 2 implies it's a submission for the driver code of the problem
        const caseSubmission = 2;
        
        let input = `${caseSubmission}\n${problem.testcases.length}`;
        for(let i=0; i<problem.testcases.length; i++){
            input = `${input}\n${problem.testcases[i].input}`;
        }
        program.stdin = input;
        
    } catch (error) {
        console.log("facing error");
        console.log(error);
    }
    const config = {
        headers: {
          "Content-Type": "application/json"
        },
      };

    try {
        // console.log(program.stdin);
        const {data} = await axios.post('https://api.jdoodle.com/v1/execute',program , config)
        res.json(data);
        // res.json({output : program})
    } catch (error) {
        console.log('error :')
        console.log(error);
        res.send(error);
    }
}

export {execute,customInputEvaluate,submissionEvaluate}