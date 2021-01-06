# Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

# A word is a maximal substring consisting of non-space characters only.

# Example 1:

# Input: s = "Hello World"
# Output: 5

# Example 2:

# Input: s = " "
# Output: 0

s = "Hello World"

def length_of_last_word(s)
    find_all_words = s.split(' ')
    last_word= find_all_words.pop()
    return last_word ? last_word.length : 0
end


# Runtime: 32 ms, faster than 100.00% of Ruby online submissions for Length of Last Word.
# Memory Usage: 209.8 MB, less than 62.22% of Ruby online submissions for Length of Last Word
s = "Hello World"
def length_of_last_word(s)
    last_word = s.split(' ').pop() ? s.split(' ').pop(). length : 0    
    return last_word 
end