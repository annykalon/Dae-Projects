listOfQuestions = [
    "1. What is the oldest programming language?",
    "2. What color does Yellow and red make?",
    "3. What rapper whose name is also a sum of money?",
    "4. Roses are red, violets are?",
    "5. Which is easiest Java or Python?"
]

print( listOfQuestions[0] )
# When the answer is correct the user will gain a point and the screen will display "correct".
def displayQuestionAndResult( question, answer ):
    score = 0
    ans= input ( question )

    if ans.lower() == answer: 
        score += 1
        print('Correct!')
    else:
        print('Wrong!')
    
    return score


tryAgain = True
# if user doesn't want to continue program will ask once more. 
while tryAgain:
    print('Hello, Welcome to Trivia!')

    ans= input ('Are you ready to play (yes/no): ')
    score = 0
    total_q = 5
    
    if ans.lower() == "yes":
        score += displayQuestionAndResult( listOfQuestions[0], "python" )

        # Incorperate some jokes to keep the game fun. 
        score += displayQuestionAndResult( listOfQuestions[1], "orange" )


        score += displayQuestionAndResult( listOfQuestions[2], "50 cents" )

       
        score += displayQuestionAndResult( listOfQuestions[3], "blue" )
       
        score += displayQuestionAndResult( listOfQuestions[4], "Python" )
           
    print(' Thank You For Playing, You Got ', score, "questions correct.")
    mark = (score/total_q) * 100

    print("Mark:", str(mark) + '%')

    ans = input( "Do you want to play again: " )

    if ans.lower() != "yes":
        tryAgain = False

print("Bye!")

print("Just for a summary, here are your questions you answered today:")

for currentQuestion in listOfQuestions:
    print( currentQuestion )

    #The end of the code, thank the user then say bye!
    # Can play again if they wanted to or end program. 
            
