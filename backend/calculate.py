import sys
import operator

first_arg = int(sys.argv[0])
oper = int(sys.argv[1])
second_arg = int(sys.argv[2])

ops = { "+": operator.add, "-": operator.sub, "*": operator.mul, "/": operator.floordiv}

print(ops[oper](first_arg, second_arg))

sys.stdout.flush()