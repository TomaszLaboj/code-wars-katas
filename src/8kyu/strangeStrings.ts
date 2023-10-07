// function loops through all 65535 chars and checks if any of them when converted to upper and then back to lower case is longer

function strangeStrings() {
    for (let i = 0; i < 65535; i++) {
        const stringFromCharCode = String.fromCharCode(i);
        const strUpperLower = stringFromCharCode.toUpperCase().toLowerCase();

        if (strUpperLower.length > 1) {
            console.log(
                "got it!",
                "charCode: ",
                i,
                stringFromCharCode,
                "then: ",
                strUpperLower
            );
        }
    }
}
strangeStrings();
