import Problem from '../models/problemModel.js'

export const submit = async (req, res) => {
    const problem = JSON.parse(req.body.problem)
    const exists = await Problem.find({title : problem.title}).countDocuments()
    
    try {
        
        if(exists > 0) {
        res.status(400)
            res.json({error : "problem already exists"})
        }
        else{
            try {
                const newProblem = await Problem.create({

                    title : problem.title,
                    searchTitle : problem.searchTitle,
                    description : (problem.description),
                    editorial : (problem.editorial),
                    difficulty : problem.difficulty,
                    solution : problem.solution,
                    defaultTemplate : problem.defaultTemplate,
                    testcases : problem.testcases
                })
                if(newProblem){
                    res.status(200)
                    res.json({
                        _id : newProblem._id,
                        title : newProblem.title,
                        searchTitle : newProblem.searchTitle,
                        description : newProblem.description,
                        difficulty : newProblem.difficulty,
                        solution : newProblem.solution,
                        defaultTemplate : newProblem.defaultTemplate,
                        testcases : newProblem.testcases
                    })
                }                
            } catch (error) {
                res.status(500)
                res.json({error : error})
            }
        }
    } catch (error) {
        res.status(500)
        res.json({error : 'Internal Server Error'})
    }
}
