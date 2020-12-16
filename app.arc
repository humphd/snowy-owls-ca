@app
snowy-owls-ca

@static
spa true
folder out

@http
get /recent
post /analytics

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
