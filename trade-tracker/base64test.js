const fs = require('fs');

let data = `data:image/jpeg;base64,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
            7ecU3ZAkzCi0Rm6mMGAJXP/Z`
            
            let f =   data.split(',')[1]
            let buff = new Buffer(f, 'base64');  
            fs.writeFileSync('stack-abuse-logo-out.png', buff);          