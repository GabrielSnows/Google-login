function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential)
  console.log(data)

  fullName.textContent = data.name
  sub.textContent = data.sub
  given_name.textContent = data.given_name
  family_name.textContent = data.family_name
  email.textContent = data.email
  email_verified.textContent = data.email_verified
  picture.setAttribute('src', data.picture)
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      '691487326470-ogo1pbqputt3v4jcaen9kv2dthma5021.apps.googleusercontent.com',
    callback: handleCredentialResponse
  })

  google.accounts.id.renderButton(
    document.getElementById('buttonDiv'),
    {
      theme: 'filled_black',
      size: 'large',
      type: 'standard',
      shape: 'pill',
      text: '$ {button.text}',
      logo_alignment: 'left'
    } // customization attributes
  )

  google.accounts.id.prompt() // also display the One Tap dialog
}
