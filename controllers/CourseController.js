export default class CourseController {
  static getAllCourses(req, res) {
    const query = req.query
    console.log(query)
    return res.status(200).json({ cursos: ['Lógica', 'Programação', 'Banco de dados' ] })
  }

  static createCourses(req, res) {
    const body = req.body
    console.log(body)
    return res.status(200).json({ cursos: ['Lógica', 'Programação', 'Banco de dados', 'Backend' ] })
  }

  static getParams(req, res) {
    const { id } = req.params
    console.log(id)
    return res.status(200).json({ cursos: ['Lógica', 'Programação', 'Banco de dados', 'Backend' ] })
  }
}