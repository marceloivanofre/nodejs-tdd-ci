import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string()
        .trim()
        .required(),
      email: Yup.string()
        .trim()
        .email()
        .required(),
      password: Yup.string()
        .trim()
        .required(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(404)
      .json({ error: 'Validation fails:', messages: err.inner });
  }
};
