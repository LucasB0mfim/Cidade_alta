import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import wallpaper from '../../assets/images/wallpaper.jpg'

import * as S from './styles'

const LogIn = () => {
  const navigate = useNavigate()

  const form = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(4, 'O nome precisa ter pelo menos 4 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: () => {
      console.log('tá fundando')
      navigate('/home')
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <S.Global>
      <S.Container>
        <form onSubmit={form.handleSubmit}>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.values.name}
              placeholder="Qual o seu nome?"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('name') ? 'error' : ''}
            />
            {form.errors.name && form.touched.name && <p>{form.errors.name}</p>}
          </div>
          <button type="submit">JOGAR</button>
        </form>
      </S.Container>
      <img src={wallpaper} alt="Wallpaper" />
    </S.Global>
  )
}

export default LogIn
