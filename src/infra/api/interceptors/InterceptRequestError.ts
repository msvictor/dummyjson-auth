class InterceptRequestError {
  public async execute(error: Error | any): Promise<void> {
    throw error;
  }
}

export default new InterceptRequestError().execute;
