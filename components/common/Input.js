const Input = ({ Label, first_name, formik, type = "text", placeholder = "" }) => {
    return (
        <div className="">
            <label htmlFor={first_name}>{Label} : </label>
            <input type={type} id={first_name} {...formik.getFieldProps(first_name)}  onBlur={formik.handleBlur} first_name={first_name} placeholder={placeholder} />
            {formik.errors[first_name] && formik.touched[first_name] && <div className="text-red-700">{formik.errors[first_name]}</div>}
        </div>
    );
}

export default Input;