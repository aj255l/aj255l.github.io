function generateEmail() {
    const address_ascii = [97, 106, 117, 110, 0, 108, 98, 101];
    address_ascii[4] = address_ascii[0] + 4;
    address_ascii[6] += 3;
    var address = address_ascii.map((x) => String.fromCharCode(x)).join(""); 

    const provider_ascii = [108, 117, 116, 54, 111, 111, 107];
    provider_ascii[0] += 3;
    provider_ascii[3] *= 2;
    var provider = provider_ascii.map((x) => String.fromCharCode(x)).join("");

    return address + "@" + provider + ".com";

}

function openMailTo() {
    window.location = "mailto:" + generateEmail();
    return null;
}