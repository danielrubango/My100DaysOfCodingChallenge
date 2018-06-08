// Eloquent JavaScript : Exercice 1
// Looping triangle
/*
    Write a loop that makes seven calls to console.log to output the following triangle:

        #
        ##
        ###
        ####
        #####
        ######
        #######
*/

for(let log = '#'; log.length <= 7; log += '#') {
    console.log(log);
}
