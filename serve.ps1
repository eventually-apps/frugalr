Function Build () {
    tsc --project ./functions
}

Function RemovePublic() {
    Remove-Item -Path .\public\*
}

Function StartWatch() {
    ./node_modules/.bin/concurrently.cmd --kill-others "firebase serve" "tsc --project ./functions --watch" "cd frontend && ./node_modules/.bin/vue-cli-service build --no-clean --dest ../public --watch" "sleep 15 && browser-sync start --proxy 'localhost:5000' --files 'public/*'\"
}

# Start compiling everything with typescript
Build
# That is successfull attempt to remove everything in the public directory so we can put the new vue files there
if ($?) {
    RemovePublic
    if ($?) {
        StartWatch
    }
}



# tsc --project ./functions && rm -rf ./public/* && concurrently --kill-others \"firebase serve\" \"tsc --project ./functions --watch\" \"cd frontend && ./node_modules/.bin/vue-cli-service build --no-clean --dest ../public --watch\" \"sleep 15 && browser-sync start --proxy 'localhost:5000' --files 'public/*'\"