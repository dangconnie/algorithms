# Sum Numbers (Requires numbers.txt)
# numbers.txt has a bunch of random numbers and the goal of this challenge is to sum all the digits of all the numbers to come up with the final result.

# You can open a file and read its contents using the "open" keyword. By default, readlines will put the filelines into a list. The below code will do the trick. For information on "with" see this article.
 
 
# with open('numbers.txt') as file:
#     file_contents_as_list = file.readlines()


with open('numbers.txt') as file:
	# print file_contents_as_list;
    file_contents_as_list = file.readlines();

numbers = file_contents_as_list;
total_sum = 0;

for number in numbers:
    list_num = int(number);
    list = [int(digit) for digit in str(list_num)]
    num_sum = 0;
    for i in list:
        num_sum += i;
    print num_sum;
    total_sum += num_sum;
print total_sum;