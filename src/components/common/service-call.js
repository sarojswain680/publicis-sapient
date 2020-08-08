const endPointURL = "https://api.spaceXdata.com/v3/launches";

export default function makeServiceCall(parameters, requestType, dataToSend, onSuccess, onError) {
    fetch(endPointURL+parameters,{
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        method: requestType,
        body: dataToSend
        })
        .then(res => res.json())
        .then(
        (result) => {
            onSuccess(result);
        })
        .catch((error) => {
            onError(error);
        })
}