export default (number) => {
    const formatNumbering = new Intl.NumberFormat("id-ID")
    return formatNumbering.format(number)
}

// atau bisa pakai library react-number-format aja!!!