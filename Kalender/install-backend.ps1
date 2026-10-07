param([Parameter(Mandatory=$true)][string]$ApiDir)
$ErrorActionPreference = 'Stop'
$target = (Resolve-Path -LiteralPath $ApiDir).Path
if (!(Test-Path -LiteralPath (Join-Path $target 'server.js'))) { throw 'ApiDir muss den Ordner mit server.js bezeichnen.' }
$calendar = Join-Path $target 'kalender'
New-Item -ItemType Directory -Path (Join-Path $calendar 'server') -Force | Out-Null
Copy-Item -LiteralPath (Join-Path $PSScriptRoot 'kalender-daten.js') -Destination $calendar -Force
Get-ChildItem -LiteralPath (Join-Path $PSScriptRoot 'server') -Filter '*.js' | ForEach-Object {
  Copy-Item -LiteralPath $_.FullName -Destination (Join-Path $calendar 'server') -Force
}
Write-Output "Kalender-Module nach $calendar kopiert. Registrierung in server.js siehe README.md."
